---
title: "GA4 events spec template for B2B SaaS founders (the one-page doc that survives audit)"
description: "Most GA4 implementations are silently broken six months in. Events that don't fire. Parameters missing. Channel attribution drifting. The one-page spec doc that prevents this, plus the audit walkthrough."
slug: "ga4-events-spec-template-b2b-saas-founders"
date: "2026-05-19"
author: "Federico Nigro"
keywords:
  - GA4 events spec
  - GA4 implementation template
  - marketing tracking audit
  - UTM convention founders
  - GA4 B2B SaaS setup
persona: "Founder con traction"
pillar: false
readingTime: 10
---

I've opened five GA4 implementations this year.

Four had silently broken events firing. The founders had no idea.

Page views fired. Conversion events did not. The dashboards looked fine because the platform shows whatever data you send it. If you send wrong data, the dashboards confidently show wrong data.

This is the cluster post for foundation two of the pillar: [Why marketing stops scaling at €30K MRR](/blog/marketing-stops-scaling-at-30k-mrr). If you're spending €5K+ a month on ads and have never written down what your events are supposed to do, this is for you.

## Why GA4 implementations rot

GA4 doesn't enforce a schema. You name events whatever you want. Parameters are free-form. When the dev team adds a new flow, they add new events. When marketing pivots, the old events stay firing alongside the new ones. Over 12 months, the events panel becomes a graveyard of names like `signup_v2`, `submit_form_old`, `purchase_event_2025`.

The implementation doesn't break because GA4 stops it. It breaks because nobody maintains the spec, and nobody can tell which events are the real ones anymore.

The cost compounds:

- Ad platforms optimize on whatever events you give them. Point Meta Pixel at a half-broken event, and the algorithm dutifully delivers more of the wrong audience.
- Reports lie. The dashboard shows growth because of double-counted events, or hides decline because the real event isn't firing.
- CFO and founder lose trust in the numbers. Decisions get made on gut.

## The bare minimum events for B2B SaaS

For a B2B SaaS at €30K-€500K MRR, you need exactly these events firing correctly:

- `page_view` — auto-collected, but verify the page_title and page_location parameters are clean.
- `lead_form_submit` — fired when someone submits the contact or demo form.
- `signup_completed` — fired when a user finishes signup (not when they click the button).
- `activation_event` — fired when the user reaches your defined activation milestone (different per product).
- `subscription_start` — fired on first paid event.
- `subscription_upgrade` — fired on plan upgrade.
- `subscription_churn` — fired on cancellation or downgrade.

Seven events. Not seventy. Each tied to a specific business outcome.

For ecom, swap subscription events for `add_to_cart`, `begin_checkout`, `purchase`, `refund`. Same principle: small set, business-meaningful.

## The 1-page spec template

Open a Google Doc or Notion page. Title: "GA4 Events Spec — 2026-MM-DD". For each event, six rows:

```
Event: signup_completed
Trigger: User redirects to /onboarding/welcome after submitting the signup form
Page firing: /onboarding/welcome
Parameters:
  - user_id (from auth context)
  - signup_source (utm_source if present, else "direct")
  - plan_selected (if any, default "free")
Optimization use: Meta Pixel, Google Ads (Lead conversion action)
Verified by: <name>, <date>
```

That's it. Six rows per event, seven events, one page total. The doc lives in your team's shared drive forever.

The discipline: when anyone changes an event, the spec doc is updated FIRST, then the code change. If those drift apart, the spec is the single source of truth.

## How to audit events end-to-end

Set a recurring quarterly task: "GA4 events audit". The walkthrough takes 20 minutes.

1. **Open GA4 → Realtime → Events** in one window.
2. **Open your site in another window**, with browser cache disabled (DevTools open, "Disable cache" checked).
3. **Walk through your funnel manually.** For each step, watch the GA4 Realtime panel within 5 seconds. The expected event should appear with the expected parameters.
4. **Mark each event PASS or FAIL** in the spec doc.
5. **For FAILs: open a ticket immediately.** Don't wait.

If even one of your seven events fails the walkthrough, your ad optimization is steering with broken instruments. Fix that before increasing spend.

## The UTM convention that survives

Most founders let each campaign use whatever UTM structure feels right at the moment. Six months in, the channel report shows 47 unique source values, most variations of "facebook" / "fb" / "Meta" / "facebook-ads" / "FB_Ad". The channel breakdown is unusable.

The convention I install with every client:

- `utm_source`: the channel (facebook, google, linkedin, organic-social, email, referral)
- `utm_medium`: the format (paid-social, paid-search, organic-social, email, affiliate)
- `utm_campaign`: the campaign or asset name, kebab-case (winter-2026-launch, founder-pillar-1)
- `utm_content`: the variant (creative-1, hero-test-a)
- `utm_term`: keyword (only for paid search)

Document it once. Share it with every freelancer, agency, and team member who creates a link. Reject any link that doesn't follow the convention.

This is unglamorous. It's also the difference between knowing what works and guessing.

## Why your CFO should sign off

The events spec is a finance document as much as a marketing one. The CFO is the person whose dashboards depend on it. They're also the person who notices first when revenue reports drift from product analytics.

A 15-minute review with the CFO once per quarter:

- "Here's what each event represents in revenue terms."
- "Here's how we verified they fire."
- "Here are the discrepancies between GA4 and our internal numbers, and why."

The CFO's signature on the spec doc creates accountability. Without it, the spec drifts the moment marketing turnover happens.

## Where to start

If you've never written down what your GA4 events are supposed to do, today is the day. Open a doc. List the seven events. Spec them.

If you've been running ads for 6+ months without this baseline, take the audit. The tracking diagnostic is the first thing I run. Five minutes, auto-qualifies fit.

→ [Take the 5-min audit](https://tally.so/r/448WWA)

Which of your events have you actually verified fire correctly in the last 90 days?
