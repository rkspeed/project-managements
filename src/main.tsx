import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeModeProvider from "./context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeModeProvider>
    <App />
  </ThemeModeProvider>
);
