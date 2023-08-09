import { useContext } from "react";
import ThemeContext from "./ThemeContext";
const ToggleTheme = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
    if (theme === "dark") {
      document.documentElement.style.setProperty("--color-bg", "#122622");
      document.documentElement.style.setProperty("--color-text", "#fff");
      document.documentElement.style.setProperty("--color-contrast", "#2c3e50");
      document.documentElement.style.setProperty("--color-border", "#fff");
      document.documentElement.style.setProperty("--color-accent", "#e74c3c");
      document.documentElement.style.setProperty("--background-image", "black");
    } else {
      document.documentElement.style.setProperty("--color-bg", "#81a69b");
      document.documentElement.style.setProperty("--color-text", "#333");
      document.documentElement.style.setProperty("--color-contrast", "#faeff0");
      document.documentElement.style.setProperty("--color-border", "#333");
      document.documentElement.style.setProperty("--color-accent", "#ad343e");
      document.documentElement.style.setProperty(
        "--background-image",
        "url(http://pets-images.dev-apis.com/pets/wallpaperB.jpg)"
      );
    }
  };

  return (
    <div className="toggle-theme">
      <button onClick={toggleTheme}>
        Toggle {theme === "light" ? "light" : "dark"} Theme
      </button>
    </div>
  );
};

export default ToggleTheme;
