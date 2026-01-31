# Security Guidelines

## Environment Variables & Secrets Management

### Local Development

**IMPORTANT**: Never commit `.env.local` or any `.env*` files to version control.

The `.gitignore` file is configured to exclude these files:
```
.env*
.env.local
.env.example
```

### Required Environment Variables

1. **INDEXNOW_API_KEY**: Search engine indexing API key
   - Used for: IndexNow API authentication
   - Location: Should be in `.env.local` (gitignored)
   - Production: Use Vercel Environment Variables or your hosting provider's secrets manager

### Best Practices

1. **Never hardcode secrets** in source code
2. **Use environment variables** for all sensitive data
3. **Use secrets management services** in production:
   - Vercel: Use Environment Variables in project settings
   - AWS: Use AWS Secrets Manager
   - GCP: Use Google Secret Manager
   - Azure: Use Azure Key Vault

4. **Rotate API keys regularly** (recommended: every 90 days)
5. **Use different keys** for development, staging, and production

### Setting Up Local Environment

1. Copy the example file:
   ```bash
   cp .env.example .env.local
   ```

2. Add your local development secrets to `.env.local`

3. **NEVER commit** `.env.local` to Git

### Production Deployment

**Vercel:**
```bash
# Add secrets via CLI
vercel env add INDEXNOW_API_KEY production

# Or via Vercel Dashboard:
# Project Settings → Environment Variables → Add
```

**Other Platforms:**
Follow your hosting provider's documentation for adding environment variables securely.

### Security Headers

This project implements Content Security Policy (CSP) and other security headers via Next.js middleware.

See `/src/middleware.ts` for configuration.

### Reporting Security Issues

If you discover a security vulnerability, please email security@prestyj.com instead of using the issue tracker.
