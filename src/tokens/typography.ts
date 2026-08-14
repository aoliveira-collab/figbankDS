/** Typography scale — coleção "typography" no Figma. */
export const fontSize = {
  caption: 11,
  footnote: 13,
  bodySm: 14,
  body: 16,
  bodyLg: 17,
  titleSm: 20,
  title: 24,
  titleLg: 28,
  headline: 34,
  display: 40,
} as const;

export const lineHeight = {
  tight: 1.2,
  normal: 1.4,
  relaxed: 1.6,
} as const;

export const letterSpacing = {
  tight: -0.5,
  normal: 0,
  wide: 0.5,
  wider: 1,
} as const;

export const fontFamily = {
  base: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
} as const;

export const typography = { fontSize, lineHeight, letterSpacing, fontFamily };
