export type ThemeMode = "light" | "dark";

export interface ThemeColors {
  primary: string;
  primaryHover: string;
  primaryActive: string;
  background: string;
  surface: string;
  border: string;
  text: string;
  textMuted: string;
  danger: string;
  success: string;
  warning: string;
  info: string;
}

export interface Theme {
  name: ThemeMode;
  colors: ThemeColors;
  radii: { sm: string; md: string; lg: string; full: string };
  spacing: Record<0 | 1 | 2 | 3 | 4 | 5 | 6, string>;
  fontFamily: string;
}

const radii = { sm: "4px", md: "8px", lg: "12px", full: "9999px" };
const spacing: Theme["spacing"] = {
  0: "0px",
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  5: "24px",
  6: "32px",
};

export const themes: Record<ThemeMode, Theme> = {
  light: {
    name: "light",
    radii,
    spacing,
    fontFamily:
      'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    colors: {
      primary: "#4f46e5",
      primaryHover: "#4338ca",
      primaryActive: "#3730a3",
      background: "#ffffff",
      surface: "#f8fafc",
      border: "#e2e8f0",
      text: "#0f172a",
      textMuted: "#64748b",
      danger: "#dc2626",
      success: "#16a34a",
      warning: "#d97706",
      info: "#0284c7",
    },
  },
  dark: {
    name: "dark",
    radii,
    spacing,
    fontFamily:
      'system-ui, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    colors: {
      primary: "#818cf8",
      primaryHover: "#6366f1",
      primaryActive: "#a5b4fc",
      background: "#0f172a",
      surface: "#1e293b",
      border: "#334155",
      text: "#f1f5f9",
      textMuted: "#94a3b8",
      danger: "#f87171",
      success: "#4ade80",
      warning: "#fbbf24",
      info: "#38bdf8",
    },
  },
};
