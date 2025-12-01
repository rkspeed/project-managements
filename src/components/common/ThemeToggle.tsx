import IconButton from "@mui/material/IconButton";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "@mui/material/styles";
import { useThemeMode } from "../../context/ThemeContext";

export default function ThemeToggle() {
  const theme = useTheme();
  const { toggleMode } = useThemeMode();

  return (
    <IconButton color="inherit" onClick={toggleMode}>
      {theme.palette.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
}
