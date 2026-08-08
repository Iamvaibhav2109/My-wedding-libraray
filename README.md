# Vaibhav ❤️ Aarohi — Wedding Website

A single-page, animation-heavy wedding site built with Next.js 16 (App Router),
Tailwind CSS v4 and Framer Motion.

```bash
npm run dev
```

Then open http://localhost:3000.

---

## Sections

| # | Section | Component | Anchor |
|---|---------|-----------|--------|
| — | Envelope / cover screen | `app/components/cover/Cover.tsx` | — |
| 1 | Hero (names, date, countdown, music) | `app/components/hero/Hero.tsx` | `#home` |
| 2 | Wedding trailer | `app/components/Trailer.tsx` | `#trailer` |
| 3 | Invitation + the couple | `app/components/Invitation.tsx` | `#invitation` |
| 4 | Our journey (12 full-screen chapters) | `app/components/Journey/Journey.tsx` | `#journey` |
| 5 | Wedding events | `app/components/Events.tsx` | `#events` |
| 6 | Venue + map | `app/components/Venue.tsx` | `#venue` |
| 7 | Memories / gallery | `app/components/Gallery.tsx` | `#gallery` |
| 8 | Countdown | `app/components/CountdownSection.tsx` | `#countdown` |
| 9 | Our families (both sides) | `app/components/Families.tsx` | `#families` |
| 10 | Final thank you + footer | `app/components/ThankYou.tsx` | `#thank-you` |

---

## Editing the content

**Almost everything lives in [`app/data/site.ts`](app/data/site.ts)** — names,
parents, the date, all six events, the venue, gallery captions, both family
lists and the thank-you note. The journey chapters are in
[`app/data/journey.ts`](app/data/journey.ts).

Change the date in one place:

```ts
export const weddingDate = "2026-11-26T19:30:00+05:30";
```

Both countdowns read from it.

---

## Replacing the placeholder media

Every image is currently a generated `.svg` placeholder so the site looks
finished before you have a single real photo. To swap in the real thing:

1. Drop your file into the matching folder under `public/images/`.
2. Update the path in `app/data/site.ts` (or `app/data/journey.ts`), changing
   the extension — e.g. `"/images/gallery/01.svg"` → `"/images/gallery/01.jpg"`.

| What | Where | Suggested size |
|------|-------|----------------|
| Hero background | `public/images/hero.jpg` (already a real photo) | 2400×1600 |
| Journey chapters ×12 | `public/images/journey/01–12` | 1920×1080 |
| Gallery ×12 | `public/images/gallery/01–12` | 1600×1100 / 1200×1600 |
| Events ×6 | `public/images/events/01–06` | 1200×1500 |
| Venue + map | `public/images/venue/` | 1920×1200 |
| Couple portraits | `public/images/couple/` | 1000×1250 |
| Trailer poster | `public/images/trailer/poster` | 1920×1080 |

### Video, music and the PDF invite

These three are optional and the UI degrades gracefully while they're missing:

- **Trailer** — `public/video/trailer.mp4`. Until it exists the lightbox shows a
  friendly "still in the edit" message instead of a broken player.
- **Music** — `public/music/wedding.mp3`. The floating music button hides itself
  entirely when there's no track.
- **PDF invite** — `public/invite.pdf`, then set `invitation.downloadUrl` to
  `"/invite.pdf"` in `app/data/site.ts`. The download button only renders when
  that value is non-empty.

---

## Family lists

The "Our Families" section is display-only — there's no form and nothing to
submit. Edit the two name lists under `families` in `app/data/site.ts`:

```ts
groom: {
  side: "Vaibhav's Side",
  house: "The Sharma Family",
  members: [
    { name: "Mr. Rajesh Sharma", relation: "Father of the Groom" },
    // …add as many as you like; the column just grows
  ],
},
```

The `bride` block works exactly the same way.

---

## Fonts

Great Vibes and Cormorant Garamond are **self-hosted** from `app/fonts/`
(latin subset, straight from Google Fonts) via `next/font/local`, rather than
`next/font/google`. That keeps the build working on networks that block
`fonts.googleapis.com` and means guests load no third-party resources.

---

## Before going live

- Set `NEXT_PUBLIC_SITE_URL` to your real domain so WhatsApp/social link
  previews resolve the OG image.
- Replace `venue.mapUrl` and `venue.mapEmbedUrl` with your actual venue.
- Replace the placeholder phone numbers in `venue.contacts`.
