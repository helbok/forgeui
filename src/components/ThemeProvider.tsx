import React, { createContext, useContext, useMemo, useState } from "react";
import { themes, type ThemeMode } from "../theme/theme";

interface ThemeContextValue {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultMode?: ThemeMode;
}

export const ThemeProvider = ({
  children,
  defaultMode = "light",
}: ThemeProviderProps) => {
  const [mode, setMode] = useState<ThemeMode>(defaultMode);

  const value = useMemo(() => ({ mode, setMode }), [mode]);

  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", mode);
  }, [mode]);

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
