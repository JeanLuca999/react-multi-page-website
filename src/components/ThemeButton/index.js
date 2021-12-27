import { useContext } from "react/cjs/react.development";
import { GlobalContext } from "../GlobalContext";
import { Button } from "./style";

export default function ThemeButton() {
  const { theme, toggleTheme } = useContext(GlobalContext);

  return (
    <Button onClick={toggleTheme} color={theme.titleColor}>
      {theme.backgroundColor === "#fff" ? "Light" : "Dark"}
    </Button>
  );
}
