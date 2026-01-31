---
name: lead-magnet
description: Research, create, and deploy high-converting lead magnets with landing pages and download functionality
---

# Dynamic Lead Magnet Operation

This command researches the highest-leverage lead magnet for your service, creates the content, builds the landing page, and sets up download functionality—all in one execution.

**Goal**: Create a lead magnet that converts website visitors into qualified leads by providing immediate value in exchange for contact information.

---

## Phase 1: Intelligence Gathering (5 Parallel Agents)

Launch ALL 5 agents simultaneously using the Task tool.

### Agent 1: Service & Audience Analyzer

**Understand what we're selling and who we're targeting:**

1. Read project homepage and key pages
2. Identify:
   - Core service offering
   - Target audience (role, industry, company size)
   - Main pain points addressed
   - Value propositions
   - Current pricing/positioning
   - Buying cycle characteristics (impulse vs. long consideration)

**Output Format:**
```
SERVICE: [One-sentence description]
AUDIENCE: [Role/title, industry, company size]
PAIN POINTS:
- [Pain point 1]
- [Pain point 2]
- [Pain point 3]

VALUE PROPS:
- [Value prop 1]
- [Value prop 2]

BUYING CYCLE: [Short/Medium/Long consideration period]
AVG DEAL SIZE: [Estimate from pricing if available]
```

### Agent 2: Lead Magnet Research

**Find what lead magnets work best for this audience and industry:**

**Research Patterns:**
- "[industry] lead magnet examples"
- "best lead magnets for [role]"
- "[competitor] free resources"
- "B2B lead magnet ideas [industry]"
- "[role] downloadable resources"
- "what [role] wants to learn about [problem]"

**Analyze:**
- What formats work best for this audience (PDF guide, checklist, calculator, template, video series, email course)
- What competitors offer as lead magnets
- What pain points generate most engagement
- What topics have high search volume but low competition
- What content types get shared most in this industry

**Output Format:**
```
TOP PERFORMING FORMATS:
1. [Format] - Why: [Reason]
2. [Format] - Why: [Reason]
3. [Format] - Why: [Reason]

COMPETITOR LEAD MAGNETS:
- [Competitor 1]: [Lead magnet] → [Analysis]
- [Competitor 2]: [Lead magnet] → [Analysis]

UNTAPPED TOPICS:
- [Topic 1] - Search demand: [High/Med/Low] - Competition: [High/Med/Low]
- [Topic 2] - Search demand: [High/Med/Low] - Competition: [High/Med/Low]
```

### Agent 3: Conversion Pattern Analyzer

**Research what makes lead magnets convert:**

**Find Examples Of:**
- High-converting lead magnet landing pages
- Headlines that drive downloads
- Form field optimization (how many fields, which ones)
- Thank you page best practices
- Email delivery patterns
- Follow-up sequence examples

**Analyze:**
- Landing page structure (above fold elements, social proof, urgency)
- CTA copy patterns that work
- Trust indicators (privacy statements, social proof)
- Mobile optimization considerations

**Output Format:**
```
HIGH-CONVERTING ELEMENTS:
Headline Patterns:
- [Pattern 1 with example]
- [Pattern 2 with example]

Form Optimization:
- Fields to include: [List]
- Fields to avoid: [List]
- Conversion optimization tips: [List]

Trust Signals:
- [Signal 1]
- [Signal 2]

Post-Download Experience:
- Thank you page elements: [List]
- Email delivery timing: [Recommendation]
```

### Agent 4: Content Quality Benchmarker

**Research what "good enough to gate" looks like:**

**Analyze:**
- Length/depth expectations for this audience
- Design quality standards (professional vs. simple)
- Data/research requirements
- Actionability requirements (checklists, templates, frameworks)
- Brand consistency needs

**Research:**
- "[industry] resource guide examples"
- "[role] downloadable checklist"
- "[problem] framework PDF"

**Output Format:**
```
QUALITY BENCHMARKS:
Content Length: [X pages/sections]
Visual Design: [Professional/Simple/Template-based]
Data Requirements: [Must include stats/can be opinion-based]
Actionability: [Implementation steps/frameworks needed]

EXAMPLES OF "GOOD ENOUGH":
- [Example 1 URL] - Why it works: [Reason]
- [Example 2 URL] - Why it works: [Reason]
```

### Agent 5: Technical Implementation Scanner

**Audit current tech stack for lead magnet delivery:**

**Check For:**
- Existing form infrastructure
- Email delivery capabilities
- PDF generation options (if needed)
- File hosting/download setup
- CRM/email integration options
- Analytics tracking setup

**Scan Files:**
- `src/app/book-demo/` or similar form pages
- `src/components/booking/` or form components
- `package.json` for form libraries
- Any existing lead capture mechanisms

**Output Format:**
```
CURRENT CAPABILITIES:
Form Library: [React Hook Form/Formspree/Custom/None]
Email Service: [Resend/SendGrid/None detected]
File Hosting: [Vercel/S3/None]
Analytics: [Google Analytics/Plausible/None]

IMPLEMENTATION PATH:
Complexity: [Simple/Medium/Complex]
New Dependencies Needed: [List]
Estimated Setup: [Quick/Moderate/Extensive]
```

---

## Hard Relevance Gates (MANDATORY)

Before proposing ANY lead magnet, it MUST pass ALL THREE gates.

### Gate 1: Value Alignment
- [ ] Provides immediate, actionable value related to core pain points
- [ ] Audience would naturally want this even without knowing our product
- [ ] Content quality justifies asking for email address
- [ ] Doesn't give away so much that product becomes unnecessary

**If ANY fail → REJECT**

### Gate 2: Qualification Power
- [ ] Attracting the right audience (decision-makers, not tire-kickers)
- [ ] Topic naturally leads to product consideration
- [ ] Can segment/score leads based on download behavior
- [ ] Fits within buying cycle (nurtures toward purchase)

**If ANY fail → REJECT**

### Gate 3: Feasibility
- [ ] Can be created with high quality in reasonable time
- [ ] Fits within current tech stack or requires minimal additions
- [ ] Team can maintain/update over time
- [ ] Legal/compliance considerations are manageable

**If ANY fail → REJECT**

---

## Kill List (NEVER Create)

Immediately reject any lead magnet that is:

- Generic content available elsewhere (no unique value)
- Requires claims we can't substantiate
- Too broad ("Complete Guide to [Industry]")
- Too niche (attracts wrong audience)
- Requires extensive ongoing maintenance
- Sensitive compliance/regulatory topics
- Content that's better as a blog post (no reason to gate it)
- "Cheat sheets" that are just lists with no substance
- Anything that feels like clickbait

---

## Phase 2: Lead Magnet Strategy

After ALL Phase 1 agents complete, synthesize findings.

### Synthesis Process

1. **Collect all intelligence** from the 5 agents

2. **Apply the 3 Hard Gates** to every candidate idea

3. **Score candidate lead magnets** using leverage scoring:

### Leverage Scoring Algorithm

Score each lead magnet idea 0-100:

```
LEVERAGE SCORE =
  Conversion Potential (0-30) +
  Qualification Power (0-25) +
  Ease of Creation (0-20) +
  Differentiation (0-15) +
  Longevity (0-10)
```

**Conversion Potential (0-30):**
- 30: Solves urgent, painful problem for exact target audience
- 20: Addresses important challenge for target audience
- 10: Interesting but not critical
- 0: Nice to have, no urgency

**Qualification Power (0-25):**
- 25: Only our ICP would want this (perfect filtering)
- 20: Strongly appeals to ICP, some noise
- 15: Moderate qualification (attracts broader audience)
- 10: Weak qualification (attracts many non-buyers)
- 0: Attracts completely wrong audience

**Ease of Creation (0-20):**
- 20: Can create in < 2 hours with existing knowledge
- 15: 2-4 hours, minimal research needed
- 10: 4-8 hours, moderate research
- 5: > 8 hours, extensive research
- 0: Requires expert consultation or unrealistic effort

**Differentiation (0-15):**
- 15: Completely unique angle/format/data
- 12: Familiar format but unique perspective
- 8: Standard format, better execution
- 4: Similar to competitors
- 0: Commodity content

**Longevity (0-10):**
- 10: Evergreen, minimal updates needed
- 7: Annual refresh sufficient
- 4: Quarterly updates needed
- 0: Constantly outdated

### Generate Top 3 Ideas

Present top 3 scored ideas with:
- Lead magnet title
- Format (PDF guide, calculator, checklist, etc.)
- Core value proposition
- Target keywords for landing page
- Leverage score breakdown
- Implementation complexity

---

## Phase 3: User Approval Gate

Present findings using this format:

```
===============================================
     LEAD MAGNET RECOMMENDATIONS
===============================================

OPTION 1 (SCORE: XX/100)
Title: [Lead Magnet Title]
Format: [PDF Guide/Calculator/Checklist/etc.]
Landing Page: /[slug]

VALUE PROPOSITION:
[One sentence: what they get and why they want it]

WHY THIS WINS:
+ [Conversion potential insight]
+ [Qualification power insight]
+ [Differentiation insight]

IMPLEMENTATION:
Content Creation: [X hours]
Landing Page: [Existing template/New page needed]
Download Setup: [Simple/Moderate/Complex]

TARGET KEYWORDS:
- [keyword 1]
- [keyword 2]

---

OPTION 2 (SCORE: XX/100)
[Same format]

---

OPTION 3 (SCORE: XX/100)
[Same format]

===============================================

Reply: "approve 1" or "approve 2" or "approve 3" or "show more options"
```

**Wait for user response before proceeding.**

---

## Phase 4: Content Creation

Once user approves an option, execute creation in parallel where possible.

### Step 1: Create Lead Magnet Content

#### For PDF Guides/Checklists:

**Content Structure:**
```
COVER PAGE
- Title
- Subtitle/benefit
- Company branding

INTRODUCTION (1 page)
- Problem statement
- What they'll learn
- How to use this resource

MAIN CONTENT (3-7 pages)
- Section 1: [Core concept/step]
- Section 2: [Core concept/step]
- Section 3: [Core concept/step]
- etc.

CALL TO ACTION (1 page)
- Next steps
- How [Product] helps
- Book demo CTA

FOOTER (all pages)
- Company name/logo
- Website URL
```

**Output Format Options:**
1. **Markdown → PDF**: Create detailed markdown that can be converted to PDF
2. **Canva Template**: Provide text content + design specifications for Canva
3. **Google Docs**: Create in structured Google Doc format
4. **HTML → PDF**: Create HTML that can be converted via headless browser

#### For Calculators/Interactive Tools:

**Create:**
1. React component for calculator UI
2. Calculation logic
3. Results interpretation
4. Lead capture integration at result display
5. Email delivery with PDF of results

#### For Templates/Swipe Files:

**Create:**
1. Template content (spreadsheet, doc, code, etc.)
2. Instructions for use
3. Example/sample implementations
4. Customization guide

#### For Email Courses:

**Create:**
1. 5-7 email sequence
2. Each email: teaching + CTA
3. Autoresponder sequence specs
4. Plain text + HTML versions

### Step 2: Create Landing Page

**Create file:** `src/app/[lead-magnet-slug]/page.tsx`

**Landing Page Structure (Required Sections):**

```typescript
import type { Metadata } from "next";
import { LeadMagnetForm } from "@/components/lead-magnet/form";
// ... other imports

export const metadata: Metadata = {
  title: "[Lead Magnet Title] | [Company]",
  description: "[Compelling meta description 155 chars]",
  keywords: ["keyword1", "keyword2", ...],
  openGraph: {
    title: "[Lead Magnet Title]",
    description: "[Benefit statement]",
    type: "website",
  },
};

export default function LeadMagnetPage() {
  return (
    <>
      {/* Hero Section - Above Fold */}
      <section>
        <h1>[Lead Magnet Title]</h1>
        <p>[Benefit-driven subtitle]</p>
        <LeadMagnetForm resourceId="[slug]" />
      </section>

      {/* What You'll Get */}
      <section>
        <h2>What You'll Get</h2>
        <ul>
          <li>[Benefit 1]</li>
          <li>[Benefit 2]</li>
          <li>[Benefit 3]</li>
        </ul>
      </section>

      {/* Social Proof (if available) */}
      <section>
        <p>"[Testimonial or stat]"</p>
      </section>

      {/* Second CTA */}
      <section>
        <LeadMagnetForm resourceId="[slug]" />
      </section>
    </>
  );
}
```

**Design Principles:**
- Above-fold form (don't make them scroll)
- Clear headline with benefit
- 2-5 bullet points of what they'll get
- Minimal form fields (Name + Email minimum)
- Privacy reassurance
- Mobile-optimized
- Fast load time

### Step 3: Create Form Component

**Create file:** `src/components/lead-magnet/form.tsx`

```typescript
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface LeadMagnetFormProps {
  resourceId: string;
}

export function LeadMagnetForm({ resourceId }: LeadMagnetFormProps) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Submit to API route
      const response = await fetch("/api/lead-magnet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name, resourceId }),
      });

      if (response.ok) {
        setSubmitted(true);
        // Trigger download or redirect to thank you page
        const data = await response.json();
        if (data.downloadUrl) {
          window.location.href = data.downloadUrl;
        }
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div>
        <h3>Check your email!</h3>
        <p>We've sent {name ? name : "you"} the download link.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <Input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Get Free Download"}
      </Button>
      <p>We respect your privacy. Unsubscribe anytime.</p>
    </form>
  );
}
```

### Step 4: Create API Route for Lead Capture

**Create file:** `src/app/api/lead-magnet/route.ts`

```typescript
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, name, resourceId } = await request.json();

    // Validate inputs
    if (!email || !resourceId) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // TODO: Add to email list / CRM
    // Example: await addToEmailList({ email, name, tags: [resourceId] });

    // TODO: Send email with download link
    // Example: await sendEmail({
    //   to: email,
    //   subject: "Your [Lead Magnet] is ready",
    //   template: "lead-magnet-delivery",
    //   data: { name, downloadUrl: `/downloads/${resourceId}.pdf` }
    // });

    // Return download URL
    return NextResponse.json({
      success: true,
      downloadUrl: `/downloads/${resourceId}.pdf`,
      // or redirect to thank you page: redirectUrl: `/thank-you?resource=${resourceId}`
    });
  } catch (error) {
    console.error("Lead magnet error:", error);
    return NextResponse.json(
      { error: "Failed to process request" },
      { status: 500 }
    );
  }
}
```

### Step 5: Create Thank You Page (Optional)

**Create file:** `src/app/thank-you/page.tsx`

```typescript
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Thank You | [Company]",
  robots: "noindex,nofollow",
};

export default function ThankYouPage({
  searchParams,
}: {
  searchParams: { resource?: string };
}) {
  return (
    <main>
      <h1>Check Your Email!</h1>
      <p>We've sent your free download to your inbox.</p>
      <p>While you wait, want to see how we can help?</p>
      <Button href="/book-demo">Book a Demo</Button>
    </main>
  );
}
```

### Step 6: Set Up File Hosting

**Options:**

1. **Static files in `/public/downloads/`**
   - Add PDF to `/public/downloads/[resource-id].pdf`
   - Accessible at `/downloads/[resource-id].pdf`
   - Simple, works for small files
   - Consider adding download tracking

2. **Vercel Blob Storage** (for larger files)
   ```typescript
   import { put } from "@vercel/blob";
   const blob = await put("lead-magnet.pdf", file, {
     access: "public",
   });
   ```

3. **S3 + Signed URLs** (for more control)
   - Upload to S3
   - Generate time-limited signed URLs
   - Better analytics and security

**Recommendation:** Start with `/public/downloads/` for simplicity.

---

## Phase 5: Email Delivery Setup

### Option 1: Manual Email (Quick Start)

**Instructions to provide user:**
```
MANUAL SETUP:
1. When form submitted, receive notification
2. Manually send email with download link
3. Add to email list manually

PRO: No integration needed
CON: Not scalable
```

### Option 2: Email Service Integration

**If Resend/SendGrid/Postmark detected:**

Create email template and autoresponder:

```typescript
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

await resend.emails.send({
  from: "team@[company].com",
  to: email,
  subject: "Your [Lead Magnet] is ready 📥",
  html: `
    <h1>Hi ${name}!</h1>
    <p>Thanks for downloading [Lead Magnet].</p>
    <p><a href="[downloadUrl]">Click here to download</a></p>
    <p>Questions? Reply to this email.</p>
  `,
});
```

### Option 3: CRM Integration

**If existing CRM detected, provide integration code:**

Example for common platforms:
- HubSpot
- Mailchimp
- ConvertKit
- ActiveCampaign

---

## Phase 6: Verification & Testing

### Step 1: Run Quality Checks

```bash
npm run typecheck
npm run lint
npm run build
```

**Fix ALL errors before continuing.**

### Step 2: Test Flow

**Manual Test Checklist:**
- [ ] Landing page loads correctly
- [ ] Form submits successfully
- [ ] Validation works (try invalid email)
- [ ] Thank you state shows
- [ ] Download link works
- [ ] Mobile experience is good
- [ ] Form is accessible (keyboard nav, screen reader)

### Step 3: Analytics Setup

**Add tracking:**
- Form views (pageview)
- Form submissions (event)
- Download clicks (event)
- Thank you page visits (pageview)

**Example with Google Analytics:**
```typescript
// In form component
gtag("event", "lead_magnet_submit", {
  resource_id: resourceId,
  resource_name: "[Lead Magnet Name]",
});
```

### Step 4: Commit Changes

```bash
git add [specific files]
git commit -m "Add lead magnet: [Title]

- Create [format] lead magnet content
- Add landing page at /[slug]
- Set up form and download delivery
- Add email integration [if applicable]

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"
```

---

## Phase 7: Launch Checklist & Promotion

### Pre-Launch Verification

- [ ] Lead magnet content is complete and high-quality
- [ ] Landing page is live and functional
- [ ] Form captures and validates data correctly
- [ ] Download delivery works (email or direct download)
- [ ] Thank you experience is in place
- [ ] Mobile experience tested
- [ ] Page speed is acceptable (<3s load)
- [ ] SEO metadata is complete
- [ ] Analytics tracking works

### Promotion Tactics (Provide to User)

**On-Site Promotion:**
```
1. Add to navigation (if high-value)
2. Homepage CTA section
3. Exit-intent popup
4. Blog post CTAs
5. Sidebar widget
```

**Off-Site Promotion:**
```
1. Social media posts (LinkedIn, Twitter, Facebook)
2. Email to existing list
3. Paid ads (Google, LinkedIn, Facebook)
4. Guest posts with link to landing page
5. Answer Quora/Reddit questions with resource link
```

**Example Social Post:**
```
[Pain point hook]

We created a free [format]: "[Title]"

✓ [Benefit 1]
✓ [Benefit 2]
✓ [Benefit 3]

Download: [link]
```

---

## Output Summary

```
===============================================
     LEAD MAGNET COMPLETE
===============================================

CREATED:
📄 [Lead Magnet Title]
   Format: [PDF Guide/Calculator/etc.]
   File: [Path to content file]

🌐 Landing Page
   URL: /[slug]
   File: src/app/[slug]/page.tsx

📧 Lead Capture
   Form: src/components/lead-magnet/form.tsx
   API: src/app/api/lead-magnet/route.ts
   Email: [Manual/Automated via service]

VERIFICATION:
[✓] Typecheck passed
[✓] Lint passed
[✓] Build passed
[✓] Manual test completed
[✓] Analytics tracking added

NEXT STEPS:
1. Upload final PDF to /public/downloads/[slug].pdf
2. [If applicable] Configure email service API keys
3. Promote landing page (see promotion tactics above)
4. Monitor conversion rate (aim for 20-40%)
5. A/B test headline/form fields if < 20% conversion

PROMOTION IDEAS:
→ Add to homepage hero section
→ Share on LinkedIn with hook
→ Email existing list
→ Run LinkedIn ads to landing page
→ Add exit-intent popup

===============================================
```

---

## Usage Examples

**Default run (full research + creation):**
```
User: /lead-magnet
```

**Quick create with specific idea:**
```
User: /lead-magnet --idea "ROI Calculator"
```

**Specific format:**
```
User: /lead-magnet --format "PDF checklist"
```

---

## Important Reminders

1. **Value First**: Lead magnet must provide real value, not just marketing fluff
2. **Qualify, Don't Trick**: Attract right audience, not maximum audience
3. **Keep It Simple**: Fewer form fields = higher conversion (start with name + email)
4. **Test Everything**: Form, download, email, mobile experience
5. **Measure Results**: Track conversion rate, lead quality, downstream pipeline
6. **Iterate**: Plan to create multiple lead magnets over time
7. **Be Honest**: Don't promise more than the resource delivers
8. **Follow Up**: Have nurture sequence ready for new leads

---

## Files Created By This Command

| File | Purpose |
|------|---------|
| `src/app/[slug]/page.tsx` | Landing page for lead magnet |
| `src/components/lead-magnet/form.tsx` | Lead capture form component |
| `src/app/api/lead-magnet/route.ts` | API route for form submission |
| `src/app/thank-you/page.tsx` | Thank you page (optional) |
| `/public/downloads/[slug].pdf` | Downloadable resource file |
| `content/lead-magnet/[slug].md` | Lead magnet content (markdown) |

---

## Success Metrics

**Immediate (Week 1):**
- Landing page conversion rate: 20-40% target
- Download completion rate: 80%+ target
- Email deliverability: 95%+ target

**Short-term (Month 1):**
- Lead quality score (fit for ICP): Track manually
- Email engagement rate: 30%+ open rate target
- Demo booking rate from leads: 5-10% target

**Long-term (Quarter 1):**
- Lead-to-customer conversion rate
- ROI of promotion efforts
- Organic search traffic to landing page
