import { Header, Ul, Li, Nav, StyledLink, NavCTA } from "./style";

export default function NavBar() {
  return (
    <Header>
      <Nav>
        <Ul>
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
