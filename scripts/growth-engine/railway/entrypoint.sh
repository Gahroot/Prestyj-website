#!/usr/bin/env bash
# Railway cron entrypoint. Required variables:
#   GROWTH_JOB=daily|weekly, GITHUB_DEPLOY_KEY (write deploy key, private, OpenSSH format)
# plus the engine's API variables (ANTHROPIC_API_KEY, CAL_API_KEY, BING_WEBMASTER_API_KEY,
# GSC_SERVICE_ACCOUNT_JSON, GA4_PROPERTY_ID, RESEND_API_KEY, INDEXNOW_API_KEY, ...).
set -euo pipefail
JOB="${GROWTH_JOB:-auto}"  # auto = daily every day, plus weekly on Mondays (UTC)
REPO="${GROWTH_REPO:-git@github.com:Gahroot/Prestyj-website.git}"

mkdir -p ~/.ssh && chmod 700 ~/.ssh
printf '%s\n' "$GITHUB_DEPLOY_KEY" > ~/.ssh/id_ed25519 && chmod 600 ~/.ssh/id_ed25519
ssh-keyscan -t ed25519 github.com >> ~/.ssh/known_hosts 2>/dev/null

rm -rf /work && git clone --depth 50 --branch main "$REPO" /work
cd /work
npm ci --no-audit --no-fund
export GROWTH_PUBLISH=1 NEXT_TELEMETRY_DISABLED=1
status=0
if [ "$JOB" = "auto" ] || [ "$JOB" = "daily" ]; then
  npx tsx scripts/growth-engine/run.ts daily || status=$?
fi
if [ "$JOB" = "weekly" ] || { [ "$JOB" = "auto" ] && [ "$(date -u +%u)" = "1" ]; }; then
  git pull --rebase origin main || true
  npx tsx scripts/growth-engine/run.ts weekly || status=$?
fi
exit $status
