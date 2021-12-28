import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
  background-color: #0f172b;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 3;
  transition: all 0.4s ease;
  @media screen and (min-width: 800px) {
    background-color: ${(props) =>
      props.scrolled ? "#0f172b" : "transparent"};
  }
`;

export const Nav = styled.nav`
  padding: 16px;

  @media screen and (min-width: 800px) {
    display: flex;
    justify-content: space-between;
    max-width: ${(props) => (props.scrolled ? "1800px" : "1200px")};
    margin: 0 auto;
    width: 100%;
  }
`;

export const LogoMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  align-items: flex-start;

  background-color: #0f172b;
  position: relative;
  height: ${(props) => (props.menuOpen ? "auto" : "0")};
  overflow-y: hidden;
  transition-duration: 0.4s;
  transition-timing-function: ease;

  border-top: ${(props) =>
    props.menuOpen ? "1px solid rgba(255, 255, 255, 0.25)" : "0"};
  margin-top: ${(props) => (props.menuOpen ? "16px" : "0")};

  @media screen and (min-width: 800px) {
    display: flex;
    flex-direction: row;
    height: auto;
    align-items: center;
    background-color: transparent;
    border-top: 0;
    overflow-y: visible;
  }
`;

export const Li = styled.li`
  padding: 10px 0;

  @media screen and (min-width: 800px) {
    margin: 0 5px;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  padding: 3px;
  text-decoration: none;
  font-size: 15px;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  transition-duration: 0.4s;
  transition-timing-function: ease;

  &:hover,
  &:focus {
    color: #fea116;
  }
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
  cursor: pointer;
`;

export const DropDowmText = styled.span`
  color: #fff;
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  font-size: 1.25rem;
  cursor: pointer;

  &:hover,
  &:focus,
  &:focus-within {
    color: #fea116;
  }

  @media screen and (min-width: 800px) {
    font-size: 1rem;
  }
`;

export const DropDowmContent = styled.div`
  background-color: #fff;
  position: relative;
  height: 0;
  overflow-y: hidden;

  @media screen and (min-width: 800px) {
    position: absolute;
  }
`;

export const DropDowm = styled.div`
  position: relative;

  &:hover,
  &:focus,
  &:focus-within {
    ${DropDowmContent} {
      height: auto;
      overflow-y: initial;
      padding: 10px 0;
    }
  }
`;

export const DropDownContentText = styled(Link)`
  font-size: 1.25rem;
  color: #666565;
  display: block;
  z-index: 9;
  text-decoration: none;
  margin: 4px 0;
  padding: 5px;

  &:hover,
  &:focus {
    background-color: lightgray;
  }

  @media screen and (min-width: 800px) {
    font-size: 1rem;
  }
`;
