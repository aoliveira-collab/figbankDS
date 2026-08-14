/**
 * Color tokens extraídos das Figma Variables do arquivo "FigBank Design System"
 * (coleções: color/base, color/accent, color/semantic, color/text).
 * Fonte: Foundations page — não editar manualmente sem sincronizar com o Figma.
 */

export const base = {
  950: "#0a0a0b",
  900: "#141416",
  850: "#1c1c1f",
  800: "#242428",
  700: "#2e2e33",
  600: "#3a3a40",
  500: "#525259",
  400: "#71717a",
  300: "#a1a1aa",
  200: "#d4d4d8",
  100: "#e4e4e7",
  50: "#f4f4f5",
  white: "#ffffff",
} as const;

export const accent = {
  red: "#f24e1e",
  redHover: "#d9451a",
  redSubtle: "#2d1410",
  orange: "#ff7262",
  orangeHover: "#e5665a",
  orangeSubtle: "#2d1714",
  green: "#0acf83",
  greenHover: "#09b874",
  greenSubtle: "#0a2d1e",
  blue: "#1abcfe",
  blueHover: "#17a8e3",
  blueSubtle: "#0a1e2d",
  purple: "#a259ff",
  purpleHover: "#9050e6",
  purpleSubtle: "#1a0f2d",
  primary: "#a259ff",
  primaryHover: "#9050e6",
  primaryPressed: "#7d3fcc",
  secondary: "#1abcfe",
  secondaryHover: "#17a8e3",
} as const;

export const semantic = {
  success: "#0acf83",
  successSubtle: "#0a2d1e",
  error: "#f24e1e",
  errorSubtle: "#2d1410",
  warning: "#ffca28",
  warningSubtle: "#2d2610",
  info: "#1abcfe",
  infoSubtle: "#0a1e2d",
} as const;

export const text = {
  primary: "#f4f4f5",
  secondary: "#a1a1aa",
  tertiary: "#71717a",
  disabled: "#525259",
  inverse: "#141416",
  accent: "#a259ff",
  success: "#0acf83",
  error: "#f24e1e",
  link: "#1abcfe",
} as const;

export const colors = { base, accent, semantic, text };
