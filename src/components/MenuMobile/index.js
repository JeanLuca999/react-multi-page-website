import { GlobalContext } from "../GlobalContext";
import { useContext } from "react";
import { MenuWrapper, MenuElement } from "./style";

export default function MenuMobile() {
  const { handleMenuClick } = useContext(GlobalContext);

  return (
    <MenuWrapper tabIndex={0} onClick={handleMenuClick}>
      <MenuElement />
      <MenuElement />
      <MenuElement />
    </MenuWrapper>
  );
}
