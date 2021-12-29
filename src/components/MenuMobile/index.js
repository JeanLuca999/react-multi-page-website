import { MenuWrapper, MenuElement } from "./style";

export default function MenuMobile({
  handleMenuClick,
  menuOpen,
  handleFocusMenu,
}) {
  return (
    <MenuWrapper
      aria-expanded={menuOpen}
      tabIndex={0}
      onFocus={handleFocusMenu}
      onClick={handleMenuClick}
      onKeyDown={(e) => (e.keyCode === 13 ? handleMenuClick() : null)}
    >
      <MenuElement />
      <MenuElement />
      <MenuElement />
    </MenuWrapper>
  );
}
