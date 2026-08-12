# Analytics Plan

Use privacy-first analytics only after Kenta approves the provider.

## Events

| Event | Purpose | Personal Data |
|---|---|---|
| `download_click` | Measure download intent | None |
| `demo_play` | Measure hero demo engagement | None |
| `language_switch` | Improve i18n | None |
| `feature_nav_click` | Understand feature interest | None |
| `pricing_view` | Measure visits to the decision page | None |
| `checkout_monthly_click` | Measure monthly checkout intent | None |
| `checkout_annual_click` | Measure annual checkout intent | None |
| `trial_started` | Measure completed Stripe trial enrollment | Aggregated server event only |
| `pro_activated` | Measure browser-to-app completion | Aggregated server event only |
| `subscription_canceled` | Measure retention and cancellation | Aggregated server event only |

## ChatGPT/Search Traffic

Track referrers and UTM values such as:

```text
utm_source=chatgpt.com
```

Do not fingerprint users.

Do not send email addresses, Stripe IDs, activation codes, video paths, subtitle text, or installation IDs to page analytics. Stripe/webhook funnel counts must be aggregated on the server before reporting.
