import type { APIRoute } from "astro";
import { site, withBase } from "@/data/site";

const absoluteUrl = (path: string) => new URL(withBase(path), `${site.origin || "http://localhost:4321"}/`).toString();

export const GET: APIRoute = () => {
  const body = `# YOMUVIA

> YOMUVIA is a Windows video player for local playback, two-pass AI subtitles, translation, A-B clipping, a persistent clip library, and compatible-media video joining.

## Product facts

- Platform: 64-bit Windows 10 and Windows 11.
- Local by default: video playback, audio extraction, and Whisper recognition run on the PC.
- Optional cloud assistance: configured context correction and translation may send recognized text, the filename, and limited context to the selected provider; this flow does not upload the video file itself.
- Free: JPY 0.
- Pro: JPY 1,480 per month or JPY 14,800 per year.
- Trial: seven days with 30 cloud minutes.
- Pro cloud allowance: 600 minutes per month; users can continue with their own supported API key through BYOK after the quota.
- Release status: licensing, cloud AI routing, and production Stripe billing are connected and pass integration checks. Microsoft Store distribution and signed updates are the remaining public-release gates; public checkout is intentionally closed until then.
- No search ranking or business outcome is guaranteed.

## Primary pages

- Japanese home: ${absoluteUrl("/ja/")}
- English home: ${absoluteUrl("/en/")}
- Pricing (JA): ${absoluteUrl("/ja/pricing/")}
- Pricing (EN): ${absoluteUrl("/en/pricing/")}
- AI subtitle video player (JA): ${absoluteUrl("/ja/ai-subtitle-video-player/")}
- AI subtitle video player (EN): ${absoluteUrl("/en/ai-subtitle-video-player/")}
- Windows video clipper (JA): ${absoluteUrl("/ja/windows-video-clipper/")}
- Windows video clipper (EN): ${absoluteUrl("/en/windows-video-clipper/")}
- Windows video joiner (JA): ${absoluteUrl("/ja/windows-video-joiner/")}
- Windows video joiner (EN): ${absoluteUrl("/en/windows-video-joiner/")}
- Privacy (JA): ${absoluteUrl("/ja/privacy/")}
- Privacy (EN): ${absoluteUrl("/en/privacy/")}
- Sales disclosure (JA): ${absoluteUrl("/ja/commercial-transactions/")}
- Sales disclosure (EN): ${absoluteUrl("/en/sales-disclosure/")}

## Accuracy notes

AI transcription and translation can contain errors. Users should verify important output against the original audio. Fast clipping and joining depend on source containers, codecs, resolutions, and keyframe layout. Users are responsible for having the rights required to edit or reuse their media.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
