"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type ConversionStatus = "PENDING" | "APPROVED" | "PAID" | "REFUNDED";
type PayoutStatus = "PENDING" | "PAID" | "FAILED";

interface Conversion {
  id: string;
  tier: string;
  amountCents: number;
  commissionCents: number;
  status: ConversionStatus;
  customerEmail: string | null;
  createdAt: string;
}

interface Payout {
  id: string;
  amountCents: number;
  method: string | null;
  status: PayoutStatus;
  paidAt: string | null;
  createdAt: string;
}

interface Props {
  affiliate: {
    name: string;
    slug: string;
    commissionRate: number;
    payoutEmail: string | null;
  };
  stats: {
    clicks30d: number;
    pendingCents: number;
    paidCents: number;
  };
  conversions: Conversion[];
  payouts: Payout[];
  affiliateLink: string;
  hasApproved: boolean;
}

function cents(c: number) {
  return `$${(c / 100).toFixed(2)}`;
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function conversionBadge(status: ConversionStatus) {
  switch (status) {
    case "PENDING":
      return <Badge variant="warning">Pending</Badge>;
    case "APPROVED":
      return <Badge variant="success">Approved</Badge>;
    case "PAID":
      return <Badge variant="default">Paid</Badge>;
    case "REFUNDED":
      return <Badge variant="destructive">Refunded</Badge>;
  }
}

function payoutBadge(status: PayoutStatus) {
  switch (status) {
    case "PENDING":
      return <Badge variant="warning">Pending</Badge>;
    case "PAID":
      return <Badge variant="success">Paid</Badge>;
    case "FAILED":
      return <Badge variant="destructive">Failed</Badge>;
  }
}

export function AffiliateDashboardClient({
  affiliate,
  stats,
  conversions,
  payouts,
  affiliateLink,
  hasApproved,
}: Props) {
  const [copied, setCopied] = useState(false);
  const [requestStatus, setRequestStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  function copyLink() {
    navigator.clipboard.writeText(affiliateLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  async function requestPayout() {
    setRequestStatus("loading");
    try {
      const res = await fetch("/api/affiliate/request-payout", {
        method: "POST",
      });
      setRequestStatus(res.ok ? "sent" : "error");
    } catch {
      setRequestStatus("error");
    }
  }

  return (
    <main className="bg-background min-h-screen">
      <div className="mx-auto max-w-5xl space-y-8 px-4 py-10">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-muted-foreground mb-1 text-xs font-semibold tracking-widest uppercase">
              Prestyj
            </p>
            <h1 className="text-2xl font-bold">Hey {affiliate.name.split(" ")[0]}</h1>
          </div>
          <div className="text-muted-foreground text-right text-sm">
            <p>{Math.round(affiliate.commissionRate * 100)}% commission</p>
            {affiliate.payoutEmail && <p className="text-xs">{affiliate.payoutEmail}</p>}
          </div>
        </div>

        {/* Affiliate link */}
        <Card>
          <CardContent className="pt-5 pb-4">
            <p className="text-muted-foreground mb-2 text-sm font-medium">Your referral link</p>
            <div className="flex items-center gap-3">
              <code className="bg-muted flex-1 truncate rounded-md px-3 py-2 text-sm">
                {affiliateLink}
              </code>
              <Button variant="outline" size="sm" onClick={copyLink}>
                {copied ? "Copied!" : "Copy"}
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-muted-foreground text-sm font-medium">
                Clicks (30d)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{stats.clicks30d}</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-muted-foreground text-sm font-medium">
                Pending balance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{cents(stats.pendingCents)}</p>
              <p className="text-muted-foreground mt-1 text-xs">30-day hold on new sales</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-muted-foreground text-sm font-medium">
                Total paid out
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{cents(stats.paidCents)}</p>
            </CardContent>
          </Card>
        </div>

        {/* Request payout */}
        {hasApproved && (
          <Card className="border-emerald-500/30 bg-emerald-500/5">
            <CardContent className="flex items-center justify-between gap-4 pt-5">
              <div>
                <p className="font-medium">You have approved earnings ready</p>
                <p className="text-muted-foreground text-sm">
                  Request a payout and we&apos;ll process it within 3 business days.
                </p>
              </div>
              <Button
                onClick={requestPayout}
                disabled={requestStatus === "loading" || requestStatus === "sent"}
              >
                {requestStatus === "sent"
                  ? "Requested!"
                  : requestStatus === "loading"
                    ? "Sending…"
                    : "Request payout"}
              </Button>
            </CardContent>
          </Card>
        )}
        {requestStatus === "error" && (
          <p className="text-destructive text-sm">Something went wrong requesting the payout.</p>
        )}

        {/* Conversions table */}
        <div>
          <h2 className="mb-3 text-lg font-semibold">Conversions</h2>
          {conversions.length === 0 ? (
            <p className="text-muted-foreground text-sm">No conversions yet.</p>
          ) : (
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Tier</TableHead>
                    <TableHead>Sale</TableHead>
                    <TableHead>Commission</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {conversions.map((c) => (
                    <TableRow key={c.id}>
                      <TableCell className="text-muted-foreground text-sm">
                        {formatDate(c.createdAt)}
                      </TableCell>
                      <TableCell className="capitalize">{c.tier}</TableCell>
                      <TableCell>{cents(c.amountCents)}</TableCell>
                      <TableCell className="font-medium">{cents(c.commissionCents)}</TableCell>
                      <TableCell>{conversionBadge(c.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          )}
        </div>

        {/* Payouts table */}
        {payouts.length > 0 && (
          <div>
            <h2 className="mb-3 text-lg font-semibold">Payout history</h2>
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Requested</TableHead>
                    <TableHead>Amount</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Paid</TableHead>
                    <TableHead>Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {payouts.map((p) => (
                    <TableRow key={p.id}>
                      <TableCell className="text-muted-foreground text-sm">
                        {formatDate(p.createdAt)}
                      </TableCell>
                      <TableCell className="font-medium">{cents(p.amountCents)}</TableCell>
                      <TableCell className="text-muted-foreground capitalize">
                        {p.method ?? "—"}
                      </TableCell>
                      <TableCell className="text-muted-foreground text-sm">
                        {p.paidAt ? formatDate(p.paidAt) : "—"}
                      </TableCell>
                      <TableCell>{payoutBadge(p.status)}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        )}
      </div>
    </main>
  );
}
