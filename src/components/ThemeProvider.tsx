import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { themes, type ThemeMode } from "../theme/theme";
import { useMediaQuery } from "../hooks/useMediaQuery";

export type ThemePreference = ThemeMode | "system";

interface ThemeContextValue {
  preference: ThemePreference;
  resolvedMode: ThemeMode;
  setPreference: (preference: ThemePreference) => void;
}

const STORAGE_KEY = "forgeui-theme";

const ThemeContext = createContext<ThemeContextValue | null>(null);

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultPreference?: ThemePreference;
}

export const ThemeProvider = ({
  children,
  defaultPreference = "system",
}: ThemeProviderProps) => {
  const [preference, setPreference] = useState<ThemePreference>(() => {
    if (typeof window === "undefined") {
      return defaultPreference;
    }
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return (stored as ThemePreference) ?? defaultPreference;
  });

  const systemDark = useMediaQuery("(prefers-color-scheme: dark)");
  const resolvedMode: ThemeMode =
    preference === "system" ? (systemDark ? "dark" : "light") : preference;

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", resolvedMode);
    const theme = themes[resolvedMode];
    root.style.setProperty("--fui-color-primary", theme.colors.primary);
    root.style.setProperty("--fui-color-primary-hover", theme.colors.primaryHover);
    root.style.setProperty("--fui-color-background", theme.colors.background);
    root.style.setProperty("--fui-color-surface", theme.colors.surface);
    root.style.setProperty("--fui-color-border", theme.colors.border);
    root.style.setProperty("--fui-color-text", theme.colors.text);
    root.style.setProperty("--fui-color-text-muted", theme.colors.textMuted);
  }, [resolvedMode]);

  const value = useMemo(
    () => ({ preference, resolvedMode, setPreference }),
    [preference, resolvedMode],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export function useTheme(): ThemeContextValue {
  const context = useContext(ThemeContext);
  if (context == null) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

export { themes };
