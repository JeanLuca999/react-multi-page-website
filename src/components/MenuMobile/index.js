import { GlobalContext } from "../GlobalContext";
import { useContext } from "react";
import { MenuWrapper, MenuElement } from "./style";

export default function MenuMobile() {
  const { handleMenuClick } = useContext(GlobalContext);

  return (
    <MenuWrapper
      tabIndex={0}
      onClick={handleMenuClick}
      onKeyDown={(e) => (e.keyCode === 13 ? handleMenuClick() : null)}
    >
      <MenuElement />
      <MenuElement />
      <MenuElement />
    </MenuWrapper>
  );
}
