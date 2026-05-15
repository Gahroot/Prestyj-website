# Top-of-funnel strategy

## The offer

100 video ads for $497, delivered in 24 hours.
Upsell ladder: 100 / 300 / 500 / 1,000.

## Target metrics

- Starter CAC: $100 (5x ROI on TOF alone)
- Plan CAC: $500 (full expansion)
- Expansion rate: 28% of starter buyers upgrade to a plan within 90 days

## Meta ads — first run

- Start: $75/day ($2,250/mo)
- Single campaign, $497 SKU as the conversion event
- Target CPA: $100 per starter purchase
- Kill switch: pause if CPA > $300 after $1,500 spent
- Scale rule: +50% budget every 30 purchases at target CPA

## Upsell sequence

1. Order bump at checkout: +$1,000 → 300 ads (50%+ take rate typical)
2. Day-1 post-delivery email: "Want 500 ads for +$1,000? Reply YES"
3. Day-7 email: "These 100 ads work better with our AI follow-up agent" → Starter plan
4. Day-30 email: Plan upsell with case study

## Why this works

- Self-funding ads: every starter buyer covers their own CAC
- Buyer ≠ prospect: every TOF lead is a paying customer
- Ladder protects anchor: $497 is "sample", not a discount

## Risks

- Quality drop on starter tier → expansion craters
- Brand dilution if "100 ads" becomes the only message — keep AI agents framing in sub-copy
- Cannibalization if $497 too prominent — keep "Most Popular" on 500-pack

## Simulation output (replace with real data after 30+ purchases)

```
Top-of-funnel offer simulation v2 — 20,000 trials each, 1,000 baseline visitors
Ad spend: $2.5/visitor · Blended plan MRR: $2600 · Avg retention: 9mo

RANKING by Year-1 revenue per 1k visitors (TOF + expansion)

Rank  Offer                                       Y1 Rev (P10 / P50 / P90)        CAC      Payback
───────────────────────────────────────────────────────────────────────────────────────────────────────────────────
   1. Batch Video Ads — $497 starter (LIVE TOF)   $398.2k / $650.0k /  $1.01M   $   44   136.8x
   2. Batch Video Ads — reprice 300/$497 (replace) $296.4k / $490.6k / $780.0k   $   40   98.1x
   3. Free AI lead-response audit                 $230.6k / $353.5k / $524.6k   $  758   67.3x
   4. Batch Video Ads (productized TOF)           $177.6k / $323.4k / $543.4k   $   82   80.9x
   5. Live AI call-you-back demo                  $210.8k / $319.0k / $466.4k   $  469   53.2x
   6. 7-day free AI texting agent trial           $158.2k / $258.0k / $399.2k   $  507   68.8x
   7. Free 300 video ads (with paid plan)          $70.4k / $117.1k / $187.4k   $  899   26.0x
   8. Book-a-demo (control)                        $29.1k /  $54.7k /  $95.3k   $ 1069   21.9x
   9. Playbook PDF                                 $20.7k /  $38.7k /  $68.1k   $ 2115   11.1x
  10. ROI / commission calculator                  $20.8k /  $37.2k /  $63.5k   $ 2513    9.3x

REVENUE BREAKDOWN — where the money comes from

  Offer                                       TOF rev (productized)   Expansion rev (plans)   Y1 total
  ─────────────────────────────────────────────────────────────────────────────────────────────────────────
  Batch Video Ads — $497 starter (LIVE TOF)       $41.1k                 $608.4k               $650.0k
  Batch Video Ads — reprice 300/$497 (replace)     $53.3k                 $436.6k               $490.6k
  Free AI lead-response audit                         $0                 $353.5k               $353.5k
  Batch Video Ads (productized TOF)               $79.8k                 $242.7k               $323.4k
  Live AI call-you-back demo                          $0                 $319.0k               $319.0k
  7-day free AI texting agent trial                   $0                 $258.0k               $258.0k
  Free 300 video ads (with paid plan)                 $0                 $117.1k               $117.1k
  Book-a-demo (control)                               $0                  $54.7k                $54.7k
  Playbook PDF                                        $0                  $38.7k                $38.7k
  ROI / commission calculator                         $0                  $37.2k                $37.2k

CAC per acquired customer (lower = better)

  Batch Video Ads — reprice 300/$497 (replace) $    40
  Batch Video Ads — $497 starter (LIVE TOF)    $    44
  Batch Video Ads (productized TOF)            $    82
  Live AI call-you-back demo                   $   469
  7-day free AI texting agent trial            $   507
  Free AI lead-response audit                  $   758
  Free 300 video ads (with paid plan)          $   899
  Book-a-demo (control)                        $  1069
  Playbook PDF                                 $  2115
  ROI / commission calculator                  $  2513
```
