"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AffiliatLoginPage() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");
  const error = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : "",
  ).get("error");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/affiliate/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <main className="bg-background flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="space-y-1">
          <div className="text-muted-foreground mb-1 text-sm font-semibold tracking-widest uppercase">
            Prestyj
          </div>
          <CardTitle className="text-2xl">Affiliate portal</CardTitle>
        </CardHeader>
        <CardContent>
          {status === "sent" ? (
            <div className="space-y-2 py-4 text-center">
              <p className="font-medium">Check your email</p>
              <p className="text-muted-foreground text-sm">
                We sent a login link to <strong>{email}</strong>. It expires in 15 minutes.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error === "invalid" && (
                <p className="text-destructive text-sm">
                  That link has expired or already been used. Request a new one.
                </p>
              )}
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={status === "loading"}
                />
              </div>
              {status === "error" && (
                <p className="text-destructive text-sm">Something went wrong. Try again.</p>
              )}
              <Button type="submit" className="w-full" disabled={status === "loading"}>
                {status === "loading" ? "Sending…" : "Send login link"}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>
    </main>
  );
}
