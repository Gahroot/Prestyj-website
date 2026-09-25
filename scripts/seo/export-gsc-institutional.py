"""Read-only GSC export using the existing ignored local service account.

Run with .secrets/gscvenv/bin/python; no package installation is required.
Pipe a JSON array of current institutional paths to stdin. Raw responses remain
in .secrets (never printed or committed). No property settings are changed.
"""
import datetime
import json
import math
import os
import pathlib
import re
import sys

from google.auth.transport.requests import AuthorizedSession
from google.oauth2 import service_account

ROOT = pathlib.Path(__file__).resolve().parents[2]


def main() -> None:
    cohort = json.loads(sys.stdin.read(100_000))
    if not isinstance(cohort, list) or not cohort or len(cohort) > 200:
        raise ValueError("Invalid URL cohort")
    if any(not isinstance(item, str) or not re.fullmatch(r"/[a-z0-9/-]*", item) for item in cohort):
        raise ValueError("Invalid cohort path")
    key_path = ROOT / ".secrets/gsc-service-account.json"
    key = json.loads(key_path.read_text())
    if key.get("type") != "service_account" or key.get("token_uri") != "https://oauth2.googleapis.com/token":
        raise ValueError("Unsupported credential configuration")
    credentials = service_account.Credentials.from_service_account_info(
        key, scopes=["https://www.googleapis.com/auth/webmasters.readonly"]
    )
    session = AuthorizedSession(credentials)
    endpoint = "https://www.googleapis.com/webmasters/v3"
    response = session.get(f"{endpoint}/sites", timeout=30)
    if response.status_code != 200:
        raise RuntimeError(f"GSC property access returned HTTP {response.status_code}")
    allowed = ["sc-domain:prestyj.com", "https://www.prestyj.com/", "https://prestyj.com/"]
    available = [item.get("siteUrl") for item in response.json().get("siteEntry", [])]
    site = next((candidate for candidate in allowed if candidate in available), None)
    if not site:
        raise RuntimeError("No supported Prestyj property available")
    from urllib.parse import quote
    expression = r"^https://(www\.)?prestyj\.com(" + "|".join(re.escape(item.rstrip("/")) for item in sorted(set(cohort))) + r")/?$"
    windows = [("2026-08-25", "2026-09-21"), ("2026-07-28", "2026-08-24")]
    records = []
    for start, end in windows:
        for dimensions in [["page"], ["query", "page"]]:
            rows = []
            for offset in range(0, 100_000, 25_000):
                request = {"startDate": start, "endDate": end, "dimensions": dimensions, "type": "web", "dataState": "final", "rowLimit": 25_000, "startRow": offset, "dimensionFilterGroups": [{"filters": [{"dimension": "page", "operator": "includingRegex", "expression": expression}]}]}
                result = session.post(f"{endpoint}/sites/{quote(site, safe='')}/searchAnalytics/query", json=request, timeout=60)
                if result.status_code != 200:
                    raise RuntimeError(f"Read-only GSC query returned HTTP {result.status_code}")
                data = result.json()
                batch = data.get("rows", [])
                if not isinstance(batch, list):
                    raise ValueError("Unexpected GSC response")
                for row in batch:
                    if not isinstance(row, dict) or not isinstance(row.get("keys"), list) or len(row["keys"]) != len(dimensions):
                        raise ValueError("Invalid GSC row shape")
                    if any(not isinstance(key, str) for key in row["keys"]):
                        raise ValueError("Invalid GSC dimension")
                    for metric in ["clicks", "impressions", "ctr", "position"]:
                        value = row.get(metric)
                        if isinstance(value, bool) or not isinstance(value, (int, float)) or not math.isfinite(value) or value < 0:
                            raise ValueError("Invalid GSC metric")
                    if row["ctr"] > 1 or row["clicks"] > row["impressions"]:
                        raise ValueError("Inconsistent GSC counts")
                rows.extend(batch)
                if len(batch) < 25_000:
                    break
            else:
                raise RuntimeError("Export row cap reached; no complete export claimed")
            records.append({"request": request, "rows": rows, "coverage": "API-returned rows; anonymized/omitted queries and provider limits may apply"})
    observed = datetime.datetime.now(datetime.timezone.utc).isoformat()
    output = ROOT / ".secrets" / ("institutional-gsc-" + datetime.datetime.now(datetime.timezone.utc).strftime("%Y%m%dT%H%M%S%f") + ".json")
    with os.fdopen(os.open(output, os.O_WRONLY | os.O_CREAT | os.O_EXCL, 0o600), "w") as handle:
        json.dump({"source": "Google Search Console API", "property": site, "observedAt": observed, "cohort": cohort, "records": records}, handle, indent=2)
    summary = []
    for record in records:
        rows = record["rows"]
        clicks = sum(row["clicks"] for row in rows)
        impressions = sum(row["impressions"] for row in rows)
        position = sum(row["position"] * row["impressions"] for row in rows) / impressions if impressions else None
        summary.append({"dimensions": record["request"]["dimensions"], "start": record["request"]["startDate"], "end": record["request"]["endDate"], "returnedRows": len(rows), "clicks": clicks, "impressions": impressions, "ctr": clicks / impressions if impressions else None, "impressionWeightedPosition": position})
    print(json.dumps({"source": "Google Search Console API", "property": site, "observedAt": observed, "privateEvidencePath": str(output.relative_to(ROOT)), "summaries": summary}, indent=2))
    session.close()


if __name__ == "__main__":
    try:
        main()
    except Exception as error:
        # Do not print credential/provider response bodies or exception details.
        print(f"GSC export failed ({type(error).__name__}); no baseline was updated.", file=sys.stderr)
        sys.exit(1)
