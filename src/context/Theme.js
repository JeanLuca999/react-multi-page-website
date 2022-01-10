import { createContext } from "react";
import { useContext, useState } from "react";

const Theme = createContext();

export function ThemeProvider({ children }) {
  const themeValues = {
    light: {
      backgroundColor: "#fff",
      textColor: "#666565",
      titleColor: "#0f172b",
    },
    dark: {
      backgroundColor: "#181818",
      textColor: "#fff",
      titleColor: "#fff",
    },
  };

  const [theme, setTheme] = useState(themeValues.light);

  function toggleTheme() {
    theme.textColor === "#fff"
      ? setTheme(themeValues.light)
      : setTheme(themeValues.dark);
  }

  return (
    <Theme.Provider value={{ theme, toggleTheme }}>{children}</Theme.Provider>
  );
}

export function useTheme() {
  const context = useContext(Theme);
  return context;
}
