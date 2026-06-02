Good catches. Here's the updated framework with the Zapier reference pulled and real examples added throughout:

---

## The AI-First Business Audit — Framework v2

**Core thesis:** Most businesses give their team AI tools and say "use this." That's AI-assisted. That's still a human doing the work with a better calculator. AI-First means the system runs the operation — humans only enter when the machine genuinely can't.

---

### PART 1 — Reframe: AI-Assisted vs. AI-First

**AI-Assisted:** Hire someone, give them ChatGPT, hope they use it.
**AI-First:** Design the system assuming no human touches it — then add humans back *only* where they're irreplaceable.

The shift isn't about tools. It's about how you architect your business.

Sales example: AI handles everything from cold lead → nurtured → qualified → booked. The human shows up to the call to collect. That's it. The AI doesn't *help* the rep — the AI *is* the rep until the moment a rep is actually worth the cost.

---

### PART 2 — The Business Audit

**Step 1: Brain Dump Every Recurring Task**

Don't filter yet. Go department by department and write down everything that happens more than once a week.

**Real examples by function:**

*Sales:*
- Responding to new inbound leads
- Following up with leads who ghosted
- Qualifying leads before a call
- Sending proposals / contracts
- Booking and confirming appointments

*Marketing:*
- Writing social media posts
- Repurposing long-form content into clips
- Running and monitoring ad campaigns
- Sending email sequences to a list
- Responding to comments / DMs

*Operations:*
- Onboarding a new client (sending docs, access, intros)
- Generating weekly reports from your tools
- Updating project statuses
- Routing inbound requests to the right person

*Customer Success:*
- Checking in with active clients
- Handling repetitive support questions
- Collecting and processing feedback

*Admin / HR:*
- Screening job applicants
- Scheduling interviews
- Processing invoices and receipts

Get it all out. You're not solving anything yet — you're just seeing the full landscape.

---

**Step 2: Apply the 5-Question AI-First Filter**

For each recurring task, score it using the same five questions the AI-First Audit uses.

The goal is not to ask, "Can AI do this?" The goal is to ask: **Is this task repetitive, expensive enough to matter, and structured enough for AI or automation to own?**

**Question 1 — Hours per week**

How many hours per week does this task currently take?
- Less than 1 hour/week
- 1–3 hours/week
- 4–8 hours/week
- 9–15 hours/week
- More than 15 hours/week

This measures the raw time cost. A task that takes 20 minutes a week may be annoying, but it's probably not your first automation priority. A task eating 10+ hours every week is different.

**Question 2 — Frequency**

How often does this task come up?
- Monthly or less
- Weekly
- A few times a week
- Daily
- Multiple times a day

This measures operational pressure. A task that happens constantly creates drag, delays, missed follow-ups, and context-switching across the team.

Together, **hours per week + frequency = leverage**.

High-leverage tasks are the ones where slow execution, inconsistent execution, or human bottlenecks create real business cost.

Examples:
- New inbound leads waiting hours for a response
- Quotes sitting without follow-up
- Job applicants piling up unread
- Weekly reports taking half a day to assemble
- Customer questions interrupting the team all day

**Question 3 — Repeatability**

How similar is each instance of the task?
- Unique every time
- Mostly unique
- Mixed
- Mostly the same
- Same every time

This measures whether the task has a pattern. AI-first systems work best when the workflow has a recognizable shape: same inputs, same decision points, same expected outputs.

Good signs:
- The same steps happen every time
- The same questions get asked
- The same data gets checked
- The same outcome is expected

Bad signs:
- Every case requires a custom strategy
- The process changes based on context nobody has written down
- Success depends heavily on taste, instinct, or relationship history

**Question 4 — Human judgment required**

How much human judgment does this task require?
- High-stakes human judgment
- Significant judgment
- Moderate judgment
- Light judgment
- Rules-based / mechanical

This measures where the human line belongs.

A task can be high-value and still not be a good automation candidate if the downside of being wrong is large or the decision depends on trust, nuance, or relationship equity.

Better AI-first candidates:
- Rules-based sorting
- First-draft writing
- Routine follow-up
- Data extraction
- Scheduling
- Qualification against clear criteria
- Routing and escalation

Poor AI-first candidates:
- Closing a large contract
- Handling a furious key client
- Making a final hiring decision
- Deciding company strategy
- Navigating a sensitive legal, medical, or financial situation without review

**Question 5 — Data availability**

Is the data needed to do this task already in your systems?
- Lives in someone's head
- Scattered across places
- Partial — some systems
- Mostly in our systems
- Already in clean systems

This is the part most teams underestimate.

AI cannot reliably run a task if the inputs are buried in Slack threads, someone's memory, handwritten notes, or five disconnected spreadsheets. The cleaner and more accessible the data, the easier the task is to automate.

Good signs:
- The task starts from a form fill, CRM record, email, ticket, call transcript, or calendar event
- Required data is already stored digitally
- The system can access the source of truth
- The output can be written back somewhere measurable

Bad signs:
- Nobody agrees where the source data lives
- The task depends on tribal knowledge
- The process only works because one person "just knows"
- The data exists, but not in a usable format

Together, **repeatability + judgment + data availability = AI-readiness**.

**How to read the score:**

| Bucket | Meaning | What to do |
|---|---|---|
| High leverage + high AI-readiness | Expensive, frequent, repeatable, low-judgment, data-accessible | Automate first |
| High leverage + low AI-readiness | Important, but messy, nuanced, or data-poor | Fix the process first / keep human involved |
| Low leverage + high AI-readiness | Easy to automate, but not that costly | Automate later |
| Low leverage + low AI-readiness | Low impact and hard to automate | Ignore for now |

Your priority list is the first bucket: **high leverage + high AI-readiness**. That's where the AI-First Audit finds your top 3.

---

**Step 3: Find the Handoff Point Inside Each Task**

Even in highly automatable tasks, there's usually one step where a human needs to enter. Knowing *exactly* where that is matters — because it tells you how to architect the system.

**Example: Inbound sales lead from a paid ad**

- Lead fills out form → AI logs it, scores it, tags it
- AI sends personalized SMS + email within 60 seconds
- Lead responds → AI continues the conversation, handles objections, asks qualifying questions
- Lead qualifies → AI books the appointment, sends confirmation + reminder sequence
- Lead shows up to the call → **Human takes over**
- Post-call → AI sends follow-up, proposal, contract, payment link

The human's job starts at the sales call and ends when the contract is signed. Everything before and after: AI.

**Example: Hiring / applicant screening**

- Job posted → AI monitors applications
- Resume comes in → AI scores against your criteria (experience, location, role fit)
- Passes threshold → AI sends screening questions via email or voice
- Candidate responds → AI evaluates answers, ranks candidates
- Top 3-5 flagged → **Human reviews shortlist and books interviews**
- Offer stage → **Human makes the call**

You don't need a recruiter spending 6 hours reading resumes. You need a human for the 45-minute interview and the gut-check offer decision.

---

**Step 4: Sort by Effort-to-Impact**

Not all high-leverage, AI-ready tasks take the same effort to build. Sort your shortlist:

**Quick wins** — High impact, simple logic, few variables. Build these in days, not weeks.
- New lead instant response (SMS/email within 60 seconds of opt-in)
- Appointment reminder + no-show follow-up sequence
- Post-job application auto-screener with scoring questions
- Review request triggered after a completed project

**Medium builds** — High impact, some conditional logic or integration work.
- Full lead qualification conversation (AI handles back-and-forth until booked)
- Content repurposing pipeline (podcast → clips → captions → scheduled posts)
- Client onboarding flow (triggers on contract sign, sends docs, sets up access, schedules kickoff)

**Complex systems** — High impact, but involves multiple data sources, real-time decisions, or nuanced conversation handling.
- AI voice agent that handles inbound calls, qualifies, and books 24/7
- Dynamic ad generation at scale from a single source video
- Full sales + CRM pipeline with branching logic across channels

Start with quick wins. Get them live, measure the output, use that proof to justify building the next tier.

---

**Step 5: Identify Where AI Is Being Wasted**

This is the part nobody talks about. A lot of "AI-powered" tools marketed to businesses are using intelligence where none is needed — and charging accordingly.

Sending a scheduled email at 9am Tuesday? That's a timer, not AI.
Logging a form fill into a spreadsheet? That's a webhook.
Generating a PDF from fixed fields? That's a template renderer.

**AI earns its place when there's variability + judgment involved:**
- Reading a lead's tone and deciding which follow-up branch to take
- Transcribing a sales call and extracting objections, next steps, and deal stage
- Personalizing outreach at scale based on someone's actual situation
- Deciding whether a support ticket is a churn risk and escalating accordingly

The test: *Could this step be handled by a simple rule?* If yes — write the rule, skip the AI. Save the model for where rules break down.

---

### PART 3 — The Human Line

Keep humans for:
1. **The money conversation** — any high-ticket close where trust is the product
2. **Relationship-critical moments** — a top client threatening to leave, a key hire you're trying to land
3. **Infinite nuance situations** — anything where being wrong has outsized consequences and there's no clear right answer
4. **The creative bets** — new directions, brand voice, the stuff that requires actual vision

Everything else is a candidate.

---

### PART 4 — The First 3 Rule

Don't try to automate everything at once. Pick three tasks from your audit that are:
- High leverage
- AI-ready
- Fastest to build

Run them for 30 days. Measure time saved, leads touched, response rates, whatever the metric is. Then move to the next three.

**CTA:** The AI-First Audit at prestyj.com/ai-first-audit scores your specific tasks against the leverage × AI-readiness rubric, gives you your top 3, and sends a 7-day deployment plan. Free, 4 minutes.

---

That's the full framework. Want to move into scripting now, or are there any sections you want to punch up further first?