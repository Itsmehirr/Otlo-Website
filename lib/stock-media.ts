/**
 * Central map of stock media used to fill placeholder slots.
 *
 * Images: Lorem Picsum (https://picsum.photos) — a free stock-photo service
 * built for exactly this (deterministic, license-clear placeholder imagery,
 * backed by real photography). Each slot gets a fixed `seed` so the same
 * photo renders every time rather than a random one per request.
 *
 * Video: a merged montage built from 7 stock clips the user supplied locally
 * (public/video/hero-bg.mp4) — normalized to 1920x1080/25fps, concatenated,
 * and compressed for web delivery (~18.9MB, 78.6s, muted).
 *
 * None of these are sourced from joinspread.app or its third-party embeds.
 */

export function picsum(seed: string, width: number, height: number) {
  return `https://picsum.photos/seed/${seed}/${width}/${height}`;
}

export const HERO_VIDEO_SRC = "/video/hero-bg.mp4";

export const HERO_SCATTER_PHOTOS = [
  "spread-scatter-1",
  "spread-scatter-2",
  "spread-scatter-3",
  "spread-scatter-4",
  "spread-scatter-5",
  "spread-scatter-6",
  "spread-scatter-7",
  "spread-scatter-8",
];

export const FEATURE_IMAGES = {
  sticky1a: "spread-sticky-1a",
  sticky1b: "spread-sticky-1b",
  sticky2a: "spread-sticky-2a",
  sticky2b: "spread-sticky-2b",
};

export const BREAK_IMAGES = {
  break1: "spread-break-1",
  break2: "spread-break-2",
};

export const STATS_BG = "spread-stats-bg";

export const TESTIMONIAL_BG = "spread-testimonial-bg";

export const TESTIMONIAL_AVATARS = [
  "spread-avatar-1",
  "spread-avatar-2",
  "spread-avatar-3",
  "spread-avatar-4",
];

export const GALLERY_IMAGES = [
  "spread-gallery-1",
  "spread-gallery-2",
  "spread-gallery-3",
  "spread-gallery-4",
  "spread-gallery-5",
  "spread-gallery-6",
  "spread-gallery-7",
];

export const SIGNUP_TESTIMONIAL_IMAGE = "spread-signup-testimonial";

export const CONTROL_BG = "spread-control-bg";
