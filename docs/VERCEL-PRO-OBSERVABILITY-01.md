# Vercel Pro Observability 01

**Project:** glennhammond.com / THE RECORD  
**Opened:** 30 August 2026 AEST  
**Status:** **IMPLEMENTED — preview qualification pending**

## Decision

The first Pro observability release is deliberately limited to:

- Vercel Web Analytics for aggregate page-use measurement;
- Vercel Speed Insights for real-user Core Web Vitals;
- the existing Vercel runtime-log path for production diagnostics.

No advertising pixels, session replay, cross-site tracking, marketing cookies,
custom visitor profiles, external log drain or third-party monitoring vendor is
introduced.

## Implementation

- `@vercel/analytics` and `@vercel/speed-insights` are installed as production
  dependencies.
- Their React components are mounted once at the application layout root.
- The public Privacy page is updated before measurement is enabled.
- The release verifier requires the new disclosure and rejects Google Analytics,
  Google Tag Manager, Meta Pixel, Microsoft Clarity and Hotjar markers.

## Privacy contract

The Privacy page states that Vercel Web Analytics and Speed Insights are used to
understand aggregate page use and real-world website performance. It records
Vercel's published position that the services collect anonymised usage and
performance data without cookies.

The implementation is not used for advertising, cross-site tracking,
personalisation or individual visitor profiles. Any future custom-event design
must be separately justified and must not transmit contact details, free-text
content or other personal information.

## Qualification

The local production qualification passes:

- 38-route SSG build;
- 24-canonical search audit;
- migration cutover audit;
- release audit;
- static accessibility and contrast checks;
- performance budgets;
- dependency audit disposition unchanged at three accepted moderate React
  Router findings, with zero high and zero critical vulnerabilities.

## Promotion gate

Before production measurement is enabled:

1. create and qualify the Vercel preview for the exact candidate SHA;
2. confirm Home, Work, Practice, Contact and Privacy render normally;
3. confirm the analytics and Speed Insights scripts load only through the
   intended Vercel integration;
4. enable Web Analytics and Speed Insights for the existing Vercel project;
5. promote the exact qualified artefact through the established controlled
   release path;
6. verify the production Privacy page before confirming data collection;
7. confirm initial analytics and performance events appear without runtime
   errors.

No domain or DNS change is part of this release.
