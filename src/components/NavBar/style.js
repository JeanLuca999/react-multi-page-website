import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  background-color: #0f172b;
`;

export const Nav = styled.nav`
  padding: 16px;
`;

export const LogoMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  padding-bottom: 16px;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  align-items: flex-start;

  background-color: #0f172b;
`;

export const Li = styled.li`
  padding: 10px 0;
`;

export const StyledLink = styled(Link)`
  display: block;
  padding: 3px;
  text-decoration: none;
  font-size: 15px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
`;

export const NavCTA = styled.button`
  display: block;
  padding: 8px 24px;
  background-color: #fea116;
  border: 0;
  color: #fff;
  text-transform: uppercase;
  font-size: 16px;
  font-weight: bold;
`;
