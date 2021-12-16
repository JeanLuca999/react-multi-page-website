import {
  Header,
  Ul,
  Li,
  Nav,
  StyledLink,
  NavCTA,
  LogoMenuWrapper,
} from "./style";

import { useContext, useEffect, useState } from "react";

import Logo from "../Logo/index";
import MenuMobile from "../MenuMobile";
import { GlobalContext } from "../GlobalContext";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const { menuOpen } = useContext(GlobalContext);

  function onScroll() {
    console.log("scrollou ai");
    if (window.pageYOffset >= 70) {
      setScrolled(true);
    } else if (window.pageYOffset < 70) {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Header scrolled={scrolled}>
      <Nav scrolled={scrolled}>
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
