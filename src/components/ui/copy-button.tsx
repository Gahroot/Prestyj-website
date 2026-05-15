"use client";

import { useState, useCallback } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CopyButtonProps {
  text: string;
  className?: string;
  size?: "sm" | "default" | "lg" | "icon" | "icon-sm" | "icon-lg";
}

export function CopyButton({ text, className = "", size = "icon-sm" }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand("copy");
      document.body.removeChild(textarea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }, [text]);

  return (
    <Button
      variant="ghost"
      size={size}
      onClick={handleCopy}
      className={`text-muted-foreground hover:text-foreground h-7 w-7 p-0 ${className}`}
      aria-label={copied ? "Copied" : "Copy statistic"}
      title={copied ? "Copied!" : "Copy to clipboard"}
    >
      {copied ? <Check className="text-primary h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
    </Button>
  );
}
