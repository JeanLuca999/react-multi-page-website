import { useTheme } from "../../context/Theme";
import { Button } from "./style";

export default function ThemeButton({ handleBlurMenu }) {
  const { theme, toggleTheme } = useTheme();

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
