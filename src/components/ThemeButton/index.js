import { useContext } from "react";
import { GlobalContext } from "../GlobalContext";
import { Button } from "./style";

export default function ThemeButton({ handleBlurMenu }) {
  const { theme, toggleTheme } = useContext(GlobalContext);

  return (
    <Button
      onClick={toggleTheme}
      color={theme.titleColor}
      onBlur={handleBlurMenu}
    >
      {theme.backgroundColor === "#fff" ? "Light" : "Dark"}
    </Button>
  );
}
