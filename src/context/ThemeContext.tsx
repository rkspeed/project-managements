import { createContext, useContext, useMemo, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const ThemeModeContext = createContext({
  toggleMode: () => {},
});

export const useThemeMode = () => useContext(ThemeModeContext);

export default function ThemeModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<"light" | "dark">("dark");

  const toggleMode = () => setMode(prev => (prev === "light" ? "dark" : "light"));

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "dark"
            ? {
                background: {
                  default: "#121212",
                  paper: "#1e1e1e",
                },
              }
            : {
                background: {
                  default: "#f5f5f5",
                  paper: "#ffffff",
                },
              }),
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: {
              body: {
                backgroundColor: mode === "dark" ? "#121212" : "#f5f5f5",
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <ThemeModeContext.Provider value={{ toggleMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />  
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
