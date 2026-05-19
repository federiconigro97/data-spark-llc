---
title: "The retention dashboard founders should check weekly (5 metrics in, 5 metrics out)"
description: "Founders check ad spend daily, signups weekly, retention quarterly. The order is exactly wrong. The 5 retention metrics that should be on your weekly dashboard, and the 5 vanity metrics that shouldn't."
slug: "retention-dashboard-founders-weekly"
date: "2026-05-19"
author: "Federico Nigro"
keywords:
  - retention dashboard
  - retention KPIs
  - retention metrics founders
  - cohort analysis dashboard
  - weekly retention review
persona: "Founder con traction"
pillar: false
readingTime: 9
---

I've seen founders check ad spend daily, signups weekly, and retention quarterly.

The order is exactly wrong.

Retention should be the most-watched number, not the least. It's the one that compounds. Acquisition is the metric you watch when retention is healthy. When retention isn't healthy, acquisition is decorating a leak.

This is the cluster post for foundation five of the pillar: [The 7x rule: why retention beats acquisition](/blog/the-7x-rule-retention-beats-acquisition). The five things to track. The five things to ignore. The weekly ritual.

## The 5 metrics that belong on the retention dashboard

### 1. Cohort retention curves (by signup month)

The single most important visual. Rows: signup cohort (one row per month for the last 12 months). Columns: months since signup. Cells: % active at that point.

What to look at every week: the **direction** of the most recent 3 cohorts compared to the older 9.

- If trending up: something you changed is working. Keep doing it.
- If trending flat: stable, no action needed.
- If trending down: cohort decay. Investigate within the week. Don't wait for the quarter.

### 2. Net revenue retention (NRR) — SaaS

NRR = (starting MRR + expansion + upsell - churn - downgrade) / starting MRR, measured per cohort.

- NRR > 110%: best-in-class. Existing customers GROW revenue.
- NRR 95-110%: healthy.
- NRR 80-95%: leaking. Acceptable for early-stage.
- NRR < 80%: structural issue. Don't scale acquisition.

For ecom, the equivalent is **repeat purchase rate** at 12 months. Same logic, different math.

### 3. Activation rate (cohort)

Of the users who signed up in the last 30 days, what % completed your defined activation event within the activation window?

If you don't have an activation event defined, see the [7-day definition process](/blog/activation-event-definition-founders-7-day-process). Without this metric, your retention dashboard has a black hole at the top.

- 50%+ activation: good for product-led B2B SaaS.
- 30-50%: median.
- Under 30%: onboarding has a structural problem.

### 4. Lifecycle flow performance

For each of the 4 lifecycle flows (welcome, abandon, post-purchase, win-back), one number:

- Welcome flow: % of cohort that completes activation within the welcome window.
- Abandon flow: recovery % per email.
- Post-purchase flow: % triggering second action.
- Win-back flow: recovery % from dormant.

These four numbers, watched weekly, tell you whether the retention infrastructure is doing its job. If you don't have the 4 flows installed, see the [4-flow email engine post](/blog/4-flow-email-engine-welcome-abandon-postpurchase-winback).

### 5. Churn classification

Not just "how many churned" — but "why they churned". Categories:

- **Voluntary churn (canceled)**: subdivided into "too expensive", "didn't use it", "switched to competitor", "business closed".
- **Involuntary churn (failed payment)**: dunning recovers ~30% of this if installed.

If 40%+ of voluntary churn is "didn't use it", you have an activation problem. If 40%+ is "too expensive", you have a positioning problem. If 40%+ is "switched to competitor", you have a differentiation problem.

The classification is the most actionable retention number. Most dashboards don't have it. Build it.

## The 5 metrics that should NOT be there

Vanity metrics that crowd out the real signal:

- **Total signups** — top of funnel, not retention.
- **Aggregate retention rate** — hides cohort decay. Use [cohort benchmarks](/blog/b2b-saas-retention-benchmarks-2026) instead.
- **Email open rates** — open is not value. Look at click-to-action conversion instead.
- **NPS or customer satisfaction scores** — useful quarterly, not weekly. Lagging indicator.
- **Social shares / vanity engagement** — orthogonal to retention.

Cut these from the weekly view. They distract.

## How to build it

You don't need fancy tooling. The minimum stack:

- **Data source**: GA4 + Stripe (or your billing tool) + Mixpanel/Amplitude (if SaaS).
- **Pipeline**: weekly export to Google Sheets via Zapier or direct API.
- **Dashboard**: the same Sheet. One tab per metric. Charts inline.

If you have more budget: Hex, Mode, or Metabase connected to your data warehouse. Same content, prettier.

The dashboard should fit on one screen. If it requires scrolling, it's too much. If it requires explanation, it's wrong.

## The weekly review ritual (15 minutes, one question)

Once a week, at the same time (Monday morning is good), open the dashboard.

Ask one question: "Did anything significant change in cohort retention this week? If yes, what?"

If yes: 30 seconds. Capture in a notes file. Investigate by midweek.

If no: 30 seconds. Close the tab. Move on.

Most weeks the answer is no. The discipline is the regularity, not the depth. The weeks something changes, you catch it 90 days earlier than you would otherwise.

## The monthly retro template

Once a month, a 60-minute deeper look:

- **Cohort table review.** Last 3 cohorts vs older 9. Trend?
- **NRR / repeat purchase rate.** Quarter-over-quarter?
- **Activation rate.** Same direction as last month?
- **Lifecycle flow performance.** Any flow degrading?
- **Churn classification.** Top reason this month vs last?

Output: one Slack message to the team. "Retention health: green/yellow/red. Top concern: X. Action this month: Y."

That's it. Simple, repeatable, monthly.

## What changes after 90 days of doing this

Founders who install the dashboard + ritual see the same pattern:

- Month 1: noise. Lots of false signals. You're calibrating.
- Month 2: pattern recognition starts. Anomalies stand out.
- Month 3: you catch something material. A flow degrading, a cohort decaying, a churn reason rising. You fix it BEFORE it shows up in revenue.

The retention dashboard is the early-warning system most founders don't build. Once installed, it's a 15-minute weekly habit that pays back in months of lead time on every retention problem.

## Where to start

Pick a sheet today. Add the 5 metrics. Set Monday morning reminder. Skip the vanity 5. Watch for 90 days.

If you don't have the data pipeline to feed the metrics, that's a foundation gap. Take the audit. The first 30 days of every retainer includes installing this. Five minutes, auto-qualifies fit.

→ [Take the 5-min audit](https://tally.so/r/448WWA)

Which of the 5 retention metrics is missing from what you check weekly today?
