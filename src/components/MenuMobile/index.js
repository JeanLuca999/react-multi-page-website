import { MenuWrapper, MenuElement } from "./style";

export default function MenuMobile() {
  return (
    <MenuWrapper tabIndex={0}>
      <MenuElement />
      <MenuElement />
      <MenuElement />
    </MenuWrapper>
  );
}
