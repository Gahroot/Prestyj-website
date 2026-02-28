import { NextResponse } from "next/server";

/**
 * Security middleware for Next.js 16
 * Implements Content Security Policy and other security headers
 */
export function middleware() {
  // Content Security Policy directives
  const cspDirectives = [
    { name: "default-src", values: ["'self'"] },
    {
      name: "script-src",
      values: [
        "'self'",
        // Required for Next.js hydration and inline scripts
        "'unsafe-inline'",
        // Required for Next.js in some cases (especially with dynamic imports)
        "'unsafe-eval'",
        // Cal.com embed (required for booking)
        "https://app.cal.com",
      ],
    },
    {
      name: "style-src",
      values: [
        "'self'",
        "'unsafe-inline'", // Required for Tailwind CSS and styled components
        "https://app.cal.com",
      ],
    },
    {
      name: "img-src",
      values: [
        "'self'",
        "data:",
        "blob:",
        "https:",
        "https://prestyj.com",
      ],
    },
    {
      name: "font-src",
      values: ["'self'", "data:"],
    },
    {
      name: "connect-src",
      values: [
        "'self'",
        // API endpoints
        "https://backend-api-production-b536.up.railway.app",
        // Search engine indexing
        "https://api.indexnow.org",
        "https://www.bing.com",
        // Cal.com embed
        "https://app.cal.com",
        "wss://app.cal.com",
      ],
    },
    {
      name: "frame-src",
      values: [
        "'self'",
        "https://app.cal.com", // Cal.com inline embed
        "https://player.vimeo.com", // Vimeo video embeds
      ],
    },
    {
      name: "frame-ancestors",
      values: ["'none'"], // Prevent clickjacking
    },
    {
      name: "base-uri",
      values: ["'self'"],
    },
    {
      name: "form-action",
      values: ["'self'"],
    },
    {
      name: "upgrade-insecure-requests",
      values: [],
    },
  ];

  // Build CSP header value
  const cspHeader = cspDirectives
    .map((directive) => {
      const values = directive.values.join(" ");
      return values ? `${directive.name} ${values}` : directive.name;
    })
    .join("; ");

  // Create response with security headers
  const response = NextResponse.next();

  // Content Security Policy
  response.headers.set("Content-Security-Policy", cspHeader);

  // Additional security headers
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-XSS-Protection", "1; mode=block");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "geolocation=(), microphone=(), camera=()"
  );

  return response;
}

// Configure which routes the middleware runs on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, sitemap.xml, robots.txt (metadata files)
     * - public folder
     */
    {
      source: "/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)).*)",
      missing: [
        { type: "header", key: "next-router-prefetch" },
        { type: "header", key: "purpose", value: "prefetch" },
      ],
    },
  ],
};
