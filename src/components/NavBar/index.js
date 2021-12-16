import {
  Header,
  Ul,
  Li,
  Nav,
  StyledLink,
  NavCTA,
  LogoMenuWrapper,
} from "./style";

import { useContext } from "react";

import Logo from "../Logo/index";
import MenuMobile from "../MenuMobile";
import { GlobalContext } from "../GlobalContext";

export default function NavBar() {
  const { menuOpen } = useContext(GlobalContext);

  return (
    <Header>
      <Nav>
        <LogoMenuWrapper>
          <Logo />
          <MenuMobile />
        </LogoMenuWrapper>
        <Ul menuOpen={menuOpen}>
          <Li>
            <StyledLink to={"/"}>home</StyledLink>
          </Li>
          <Li>
            <StyledLink to={"/about"}>about</StyledLink>
          </Li>
          <Li>
            <StyledLink to={"/service"}>service</StyledLink>
          </Li>
          <Li>
            <StyledLink to={"/menu"}>menu</StyledLink>
          </Li>
          <Li>
            <StyledLink to={"/pages"}>pages</StyledLink>
          </Li>
          <Li>
            <StyledLink to={"/contact"}>contact</StyledLink>
          </Li>
          <Li>
            <NavCTA>book a table</NavCTA>
          </Li>
        </Ul>
      </Nav>
    </Header>
  );
}
