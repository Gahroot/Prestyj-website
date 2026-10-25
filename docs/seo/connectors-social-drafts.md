# Connectors offer: social post drafts

Ready to post from your own LinkedIn and dev.to accounts. Each one links to a page on prestyj.com, which is what helps rankings: real people clicking through, and the dev.to article pointing back with a canonical link.

Post them about a week apart, after the site is deployed. Check that every link opens before posting.

---

## 1. LinkedIn: launch post (week 1)

Most businesses I talk to have the same problem with Claude and ChatGPT.

The assistant is great. But the answers they actually need live in systems it can't see: the ERP, the accounting file, the SQL database, the internal API, the SharePoint folder that runs operations.

The directory connectors cover the popular SaaS apps. Everything else needs a custom one.

So that's what we now build at Prestyj: custom Claude connectors, custom MCP servers, and custom ChatGPT plugins, built around the questions your team really asks, signed in with each person's own permissions, and hosted and maintained for you.

A few rules we build by:
- Read-only first. Write actions come later, behind approval.
- Narrow tools, not a wrapper around every API endpoint.
- If the data is withheld, the connector says so. It never guesses.

If there's a system your team keeps copy-pasting out of, I'd like to hear which one.

https://prestyj.com/custom-claude-connectors

---

## 2. LinkedIn: security angle (week 2)

Before you plug Claude or ChatGPT into a business system, ask one question:

"Whose permissions does the connector use?"

If the answer is "one shared API key," everyone who uses the assistant can reach everything that key can reach. That's rarely what a business wants.

The MCP spec supports per-user OAuth, so the assistant only sees what that person could already see in the source system. It's more work to build, and it's the part that matters most.

We wrote a plain-language checklist covering auth, tool design, write approvals, logging, and limits:

https://prestyj.com/connectors/mcp-server-security-checklist

---

## 3. LinkedIn: open-source tool launch (after the tool is published)

We open-sourced a small tool: mcp-connector-check.

Point it at any remote MCP server (a custom Claude connector or a ChatGPT app endpoint) and it checks production readiness without calling a single tool: HTTPS, whether anonymous access is allowed, OAuth discovery, tool descriptions and schemas, missing write-action annotations, and oversized instructions.

It runs as a CLI or as an MCP server inside Claude itself.

GitHub: <add the repo URL once published>
Why we built it: https://prestyj.com/connectors/mcp-server-security-checklist

---

## 4. dev.to article (week 3)

Set the canonical URL in the dev.to front matter so Google credits prestyj.com:

```
---
title: What building production MCP servers taught us about Claude connectors
published: true
tags: mcp, claude, ai, security
canonical_url: https://prestyj.com/connectors/custom-claude-connector-guide
---
```

We've built several production MCP servers for businesses: a read-only portfolio connector over three source systems, a "connect once" business memory over Postgres, a governed context server for a research platform, and a multi-tenant server deployed separately per customer. Client names withheld; the lessons travel.

### 1. The protocol is the easy part

A working MCP server takes an afternoon with the official SDK. A useful one takes weeks, because the hard decisions are which tools exist, what each one is allowed to return, and whose permissions it runs with.

### 2. Start from questions, not endpoints

The worst connector is one that exposes every API endpoint as a tool. The model has dozens of near-identical options, picks the wrong one, and pulls far too much data. We start from the ten or twenty questions a team asks every week, and those decide the tool list. In one build, a tool-selection benchmark checks that the model picks the right tool for each question, so tool changes can't quietly break it.

### 3. Bound everything

Every tool has a ceiling: rows, documents, time, output size. Our read-only SQL tool has a five-second cap. Unbounded results don't just cost tokens; they push the useful context out of the window.

### 4. Never let the caller choose the tenant

In the multi-tenant builds, the credential resolves the tenant. Any tenant or access field supplied in a tool call is rejected before execution. If a model can type a tenant ID, it eventually will.

### 5. Say "withheld", never guess

When a user isn't allowed to see something, the connector reports it as withheld. It doesn't fill the gap from another source. When two sources disagree, both are shown with their evidence instead of being averaged.

### 6. Read-only first, writes behind a switch

Writes need a separate switch, explicit confirmation, and an idempotency key. Ship read-only, earn trust, then add the one or two write actions people actually ask for.

### 7. Keep server instructions short

Claude Code truncates server instructions at 2,048 characters, so we enforce that limit with a test. Short, specific rules ("if a figure is missing, say so") steer the model more than long prose.

### 8. Remote means reachable, and authenticated

Claude calls custom connectors from Anthropic's cloud, even from Claude Desktop. The server needs a public HTTPS endpoint and real auth: OAuth protected-resource metadata and per-user tokens, not a shared key.

The full guide, including plans and rollout on Claude Team and Enterprise, is here: https://prestyj.com/connectors/custom-claude-connector-guide

If you'd rather not build and run it yourself, that's what we do: https://prestyj.com/done-for-you-claude-connectors
