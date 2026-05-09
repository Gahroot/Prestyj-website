"use client";

import { useCallback, useEffect, useState } from "react";
import { CheckCircle, Download, FileText, Loader2, Mail, User } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const STORAGE_KEY = "prestyj:exit-intent:qualvol-playbook:submitted";
const SESSION_SHOWN_KEY = "prestyj:exit-intent:qualvol-playbook:shown";
const TRIGGER_DELAY_MS = 5000; // don't trigger immediately on page load

interface ApiResponse {
  success: boolean;
  message: string;
  downloadUrl?: string;
}

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  const hasAlreadySubmitted = useCallback(() => {
    if (typeof window === "undefined") return false;
    try {
      return window.localStorage.getItem(STORAGE_KEY) === "true";
    } catch {
      return false;
    }
  }, []);

  const wasShownThisSession = useCallback(() => {
    if (typeof window === "undefined") return false;
    try {
      return window.sessionStorage.getItem(SESSION_SHOWN_KEY) === "true";
    } catch {
      return false;
    }
  }, []);

  const markShown = useCallback(() => {
    try {
      window.sessionStorage.setItem(SESSION_SHOWN_KEY, "true");
    } catch {
      // ignore storage errors
    }
  }, []);

  useEffect(() => {
    if (hasAlreadySubmitted() || wasShownThisSession()) return;

    let armed = false;
    const armTimeout = window.setTimeout(() => {
      armed = true;
    }, TRIGGER_DELAY_MS);

    const handleMouseLeave = (e: MouseEvent) => {
      if (!armed) return;
      // Trigger only when cursor exits through the top of the viewport
      // (toward the browser tab/close area) and has actually left the window.
      if (e.clientY <= 0 && e.relatedTarget === null) {
        markShown();
        setOpen(true);
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.clearTimeout(armTimeout);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [hasAlreadySubmitted, wasShownThisSession, markShown]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          magnetType: "qualvol-playbook",
        }),
      });

      const data: ApiResponse = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
        setDownloadUrl(data.downloadUrl ?? null);
        try {
          window.localStorage.setItem(STORAGE_KEY, "true");
        } catch {
          // ignore storage errors
        }
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit form");
    } finally {
      setLoading(false);
    }
  };

  const handleDownload = () => {
    if (downloadUrl) {
      window.open(downloadUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        {!submitted ? (
          <>
            <DialogHeader>
              <div className="mx-auto sm:mx-0 mb-2 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium w-fit">
                <FileText className="h-3.5 w-3.5" />
                Free Download
              </div>
              <DialogTitle className="text-2xl font-heading">
                Wait — grab the QualVol Content Playbook
              </DialogTitle>
              <DialogDescription>
                The exact playbook we use to ship 270–2,700 on-brand posts per
                month across every platform. Free PDF, sent to your inbox.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="exit-intent-name">Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="exit-intent-name"
                    type="text"
                    placeholder="Your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    disabled={loading}
                    className="pl-9"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="exit-intent-email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="exit-intent-email"
                    type="email"
                    placeholder="you@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    disabled={loading}
                    className="pl-9"
                  />
                </div>
              </div>

              {error && (
                <p className="text-sm text-destructive" role="alert">
                  {error}
                </p>
              )}

              <DialogFooter className="sm:justify-stretch">
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full"
                  size="lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending…
                    </>
                  ) : (
                    <>
                      <Download className="mr-2 h-4 w-4" />
                      Send me the playbook
                    </>
                  )}
                </Button>
              </DialogFooter>

              <p className="text-xs text-muted-foreground text-center">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          </>
        ) : (
          <>
            <DialogHeader>
              <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <DialogTitle className="text-center text-2xl font-heading">
                Check your inbox
              </DialogTitle>
              <DialogDescription className="text-center">
                The QualVol Content Playbook is on its way. You can also
                download it now.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter className="sm:justify-stretch">
              <Button
                onClick={handleDownload}
                disabled={!downloadUrl}
                className="w-full"
                size="lg"
              >
                <Download className="mr-2 h-4 w-4" />
                Download playbook
              </Button>
            </DialogFooter>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
