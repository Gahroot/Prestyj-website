"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type ConversionStatus = "PENDING" | "APPROVED" | "PAID" | "REFUNDED";

interface AffiliateRow {
  id: string;
  name: string;
  email: string;
  slug: string;
  commissionRate: number;
  balanceCents: number;
  active: boolean;
  payoutEmail: string | null;
  createdAt: string;
  clickCount: number;
  conversionCount: number;
}

interface ConversionRow {
  id: string;
  affiliateName: string;
  affiliateSlug: string;
  tier: string;
  amountCents: number;
  commissionCents: number;
  status: ConversionStatus;
  customerEmail: string | null;
  createdAt: string;
}

interface PendingPayoutRow {
  id: string;
  affiliateName: string;
  affiliateEmail: string;
  amountCents: number;
  method: string | null;
  status: string;
  createdAt: string;
}

interface Props {
  adminSecret: string;
  siteUrl: string;
  affiliates: AffiliateRow[];
  conversions: ConversionRow[];
  pendingPayouts: PendingPayoutRow[];
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

export function AdminAffiliatesClient({
  adminSecret,
  siteUrl,
  affiliates: initialAffiliates,
  conversions: initialConversions,
  pendingPayouts: initialPayouts,
}: Props) {
  const [affiliates, setAffiliates] = useState(initialAffiliates);
  const [conversions, setConversions] = useState(initialConversions);
  const [pendingPayouts, setPendingPayouts] = useState(initialPayouts);

  // Create affiliate form
  const [form, setForm] = useState({
    name: "",
    email: "",
    slug: "",
    commissionRate: "20",
    payoutEmail: "",
  });
  const [createStatus, setCreateStatus] = useState<"idle" | "loading" | "error">("idle");

  const headers = { "x-admin-secret": adminSecret, "Content-Type": "application/json" };

  async function createAffiliate(e: React.FormEvent) {
    e.preventDefault();
    setCreateStatus("loading");
    const res = await fetch("/api/admin/affiliates", {
      method: "POST",
      headers,
      body: JSON.stringify({
        ...form,
        commissionRate: parseFloat(form.commissionRate) / 100,
      }),
    });
    if (res.ok) {
      const { affiliate } = await res.json();
      setAffiliates((prev) => [{ ...affiliate, clickCount: 0, conversionCount: 0 }, ...prev]);
      setForm({ name: "", email: "", slug: "", commissionRate: "20", payoutEmail: "" });
      setCreateStatus("idle");
    } else {
      setCreateStatus("error");
    }
  }

  async function toggleActive(id: string, active: boolean) {
    await fetch("/api/admin/affiliates", {
      method: "PATCH",
      headers,
      body: JSON.stringify({ id, active: !active }),
    });
    setAffiliates((prev) =>
      prev.map((a) => (a.id === id ? { ...a, active: !active } : a))
    );
  }

  async function approveConversion(id: string) {
    const res = await fetch("/api/admin/conversions", {
      method: "PATCH",
      headers,
      body: JSON.stringify({ id, status: "APPROVED" }),
    });
    if (res.ok) {
      setConversions((prev) =>
        prev.map((c) => (c.id === id ? { ...c, status: "APPROVED" as ConversionStatus } : c))
      );
    }
  }

  async function createPayout(affiliateId: string, method: string) {
    const res = await fetch("/api/admin/payouts", {
      method: "POST",
      headers,
      body: JSON.stringify({ affiliateId, method }),
    });
    if (res.ok) {
      window.location.reload();
    }
  }

  async function markPayoutPaid(id: string, reference: string) {
    const res = await fetch("/api/admin/payouts", {
      method: "PATCH",
      headers,
      body: JSON.stringify({ id, status: "PAID", reference }),
    });
    if (res.ok) {
      setPendingPayouts((prev) => prev.filter((p) => p.id !== id));
    }
  }

  const pendingConversions = conversions.filter((c) => c.status === "PENDING");
  const approvedConversions = conversions.filter((c) => c.status === "APPROVED");

  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-10 space-y-10">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-1">
              Prestyj
            </p>
            <h1 className="text-2xl font-bold">Affiliate admin</h1>
          </div>
        </div>

        {/* Summary cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                Affiliates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{affiliates.filter((a) => a.active).length}</p>
              <p className="text-xs text-muted-foreground">active</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                Pending review
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{pendingConversions.length}</p>
              <p className="text-xs text-muted-foreground">conversions</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                Approved
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{approvedConversions.length}</p>
              <p className="text-xs text-muted-foreground">ready to pay</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                Pending payouts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">{pendingPayouts.length}</p>
              <p className="text-xs text-muted-foreground">to process</p>
            </CardContent>
          </Card>
        </div>

        {/* Create affiliate */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Add affiliate</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={createAffiliate} className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1">
                <Label>Name</Label>
                <Input
                  placeholder="Jane Smith"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  required
                />
              </div>
              <div className="space-y-1">
                <Label>Email</Label>
                <Input
                  type="email"
                  placeholder="jane@example.com"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  required
                />
              </div>
              <div className="space-y-1">
                <Label>Slug</Label>
                <Input
                  placeholder="jane"
                  value={form.slug}
                  onChange={(e) =>
                    setForm((f) => ({
                      ...f,
                      slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ""),
                    }))
                  }
                  required
                />
              </div>
              <div className="space-y-1">
                <Label>Commission %</Label>
                <Input
                  type="number"
                  min="1"
                  max="50"
                  step="1"
                  value={form.commissionRate}
                  onChange={(e) => setForm((f) => ({ ...f, commissionRate: e.target.value }))}
                  required
                />
              </div>
              <div className="space-y-1">
                <Label>Payout email (optional)</Label>
                <Input
                  type="email"
                  placeholder="PayPal or Wise email"
                  value={form.payoutEmail}
                  onChange={(e) => setForm((f) => ({ ...f, payoutEmail: e.target.value }))}
                />
              </div>
              <div className="flex items-end">
                <Button type="submit" disabled={createStatus === "loading"} className="w-full">
                  {createStatus === "loading" ? "Creating…" : "Create affiliate"}
                </Button>
              </div>
              {createStatus === "error" && (
                <p className="text-sm text-destructive col-span-full">
                  Failed — email or slug may already be in use.
                </p>
              )}
            </form>
          </CardContent>
        </Card>

        {/* Affiliates table */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Affiliates</h2>
          <Card>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Link</TableHead>
                  <TableHead>Commission</TableHead>
                  <TableHead>Balance</TableHead>
                  <TableHead>Clicks</TableHead>
                  <TableHead>Sales</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {affiliates.map((a) => (
                  <TableRow key={a.id}>
                    <TableCell>
                      <div>
                        <p className="font-medium">{a.name}</p>
                        <p className="text-xs text-muted-foreground">{a.email}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <code className="text-xs text-muted-foreground">
                        {siteUrl}/r/{a.slug}
                      </code>
                    </TableCell>
                    <TableCell>{Math.round(a.commissionRate * 100)}%</TableCell>
                    <TableCell className="font-medium">{cents(a.balanceCents)}</TableCell>
                    <TableCell>{a.clickCount}</TableCell>
                    <TableCell>{a.conversionCount}</TableCell>
                    <TableCell>
                      {a.active ? (
                        <Badge variant="success">Active</Badge>
                      ) : (
                        <Badge variant="outline">Inactive</Badge>
                      )}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => toggleActive(a.id, a.active)}
                      >
                        {a.active ? "Deactivate" : "Activate"}
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>

        {/* Conversions pending approval */}
        {pendingConversions.length > 0 && (
          <div>
            <h2 className="text-lg font-semibold mb-1">Pending conversions</h2>
            <p className="text-sm text-muted-foreground mb-3">
              Approve after the 30-day refund window has passed.
            </p>
            <Card>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Date</TableHead>
                    <TableHead>Affiliate</TableHead>
                    <TableHead>Tier</TableHead>
                    <TableHead>Sale</TableHead>
                    <TableHead>Commission</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {pendingConversions.map((c) => (
                    <TableRow key={c.id}>
                      <TableCell className="text-muted-foreground text-sm">
                        {formatDate(c.createdAt)}
                      </TableCell>
                      <TableCell>{c.affiliateName}</TableCell>
                      <TableCell className="capitalize">{c.tier}</TableCell>
                      <TableCell>{cents(c.amountCents)}</TableCell>
                      <TableCell className="font-medium">{cents(c.commissionCents)}</TableCell>
                      <TableCell className="text-muted-foreground text-sm">
                        {c.customerEmail ?? "—"}
                      </TableCell>
                      <TableCell>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => approveConversion(c.id)}
                        >
                          Approve
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        )}

        {/* Approved — ready to pay */}
        {approvedConversions.length > 0 && (
          <ApprovedSection
            conversions={approvedConversions}
            affiliates={affiliates}
            onCreatePayout={createPayout}
          />
        )}

        {/* Pending payouts */}
        {pendingPayouts.length > 0 && (
          <PendingPayoutsSection
            payouts={pendingPayouts}
            onMarkPaid={markPayoutPaid}
          />
        )}
      </div>
    </main>
  );
}

function ApprovedSection({
  conversions,
  affiliates,
  onCreatePayout,
}: {
  conversions: ConversionRow[];
  affiliates: AffiliateRow[];
  onCreatePayout: (affiliateId: string, method: string) => void;
}) {
  const [method, setMethod] = useState("wise");

  const byAffiliate = conversions.reduce<Record<string, ConversionRow[]>>(
    (acc, c) => {
      if (!acc[c.affiliateName]) acc[c.affiliateName] = [];
      acc[c.affiliateName].push(c);
      return acc;
    },
    {}
  );

  return (
    <div>
      <h2 className="text-lg font-semibold mb-1">Approved — ready to pay</h2>
      <p className="text-sm text-muted-foreground mb-3">
        These commissions have cleared the 30-day window.
      </p>
      <div className="space-y-4">
        {Object.entries(byAffiliate).map(([name, rows]) => {
          const total = rows.reduce((s, c) => s + c.commissionCents, 0);
          const affiliate = affiliates.find((a) => a.name === name);
          return (
            <Card key={name}>
              <CardContent className="pt-5 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{name}</p>
                    <p className="text-sm text-muted-foreground">
                      {rows.length} conversion{rows.length !== 1 ? "s" : ""} ·{" "}
                      <span className="font-medium text-foreground">
                        {`$${(total / 100).toFixed(2)}`} due
                      </span>
                    </p>
                    {affiliate?.payoutEmail && (
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Send to: {affiliate.payoutEmail}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Input
                      value={method}
                      onChange={(e) => setMethod(e.target.value)}
                      placeholder="wise / paypal / bank"
                      className="w-36 text-sm"
                    />
                    <Button
                      size="sm"
                      onClick={() =>
                        affiliate && onCreatePayout(affiliate.id, method)
                      }
                    >
                      Create payout
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

function PendingPayoutsSection({
  payouts,
  onMarkPaid,
}: {
  payouts: PendingPayoutRow[];
  onMarkPaid: (id: string, reference: string) => void;
}) {
  const [refs, setRefs] = useState<Record<string, string>>({});

  return (
    <div>
      <h2 className="text-lg font-semibold mb-3">Payouts to confirm</h2>
      <Card>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Requested</TableHead>
              <TableHead>Affiliate</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Method</TableHead>
              <TableHead>Reference</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {payouts.map((p) => (
              <TableRow key={p.id}>
                <TableCell className="text-muted-foreground text-sm">
                  {formatDate(p.createdAt)}
                </TableCell>
                <TableCell>
                  <div>
                    <p className="font-medium">{p.affiliateName}</p>
                    <p className="text-xs text-muted-foreground">{p.affiliateEmail}</p>
                  </div>
                </TableCell>
                <TableCell className="font-medium">{cents(p.amountCents)}</TableCell>
                <TableCell className="text-muted-foreground capitalize">
                  {p.method ?? "—"}
                </TableCell>
                <TableCell>
                  <Input
                    className="w-40 text-sm"
                    placeholder="txn ID / ref"
                    value={refs[p.id] ?? ""}
                    onChange={(e) =>
                      setRefs((r) => ({ ...r, [p.id]: e.target.value }))
                    }
                  />
                </TableCell>
                <TableCell>
                  <Button
                    size="sm"
                    onClick={() => onMarkPaid(p.id, refs[p.id] ?? "")}
                  >
                    Mark paid
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
