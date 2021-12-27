import {
  Header,
  Ul,
  Li,
  Nav,
  StyledLink,
  NavCTA,
  LogoMenuWrapper,
  DropDowm,
  DropDowmText,
  DropDowmContent,
  DropDownContentText,
} from "./style";

import { useContext, useEffect, useState } from "react";

import Logo from "../Logo/index";
import MenuMobile from "../MenuMobile";
import { GlobalContext } from "../GlobalContext";
import ThemeButton from "../ThemeButton";

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

  const { toggleTheme } = useContext(GlobalContext);

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
            <DropDowm>
              <DropDowmText tabIndex={0}>PAGES</DropDowmText>
              <DropDowmContent>
                <DropDownContentText to={"/booking"}>
                  Booking
                </DropDownContentText>
                <DropDownContentText to={"/team"}>Our Team</DropDownContentText>
                <DropDownContentText to={"/testimonial"}>
                  Testimonial
                </DropDownContentText>
              </DropDowmContent>
            </DropDowm>
          </Li>
          <Li>
            <StyledLink to={"/contact"}>contact</StyledLink>
          </Li>
          <Li>
            <NavCTA>book a table</NavCTA>
          </Li>
          <Li>
            <ThemeButton />
          </Li>
        </Ul>
      </Nav>
    </Header>
  );
}
