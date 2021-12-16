import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Header = styled.header``

export const Nav = styled.nav`

`

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  list-style-type: none;
  align-items: flex-start;
  padding: 10px 16px;

  background-color: #0f172b;
`

export const Li = styled.li`

`

export const StyledLink = styled(Link)`
  display: block;
  padding: 3px;
  text-decoration: none;
  font-size: 1.25rem;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
`

export const NavCTA = styled.button`
  display: block;
  padding: 8px 16px;
  background-color: #fea116;
  border: 0;
  color: #fff;
  text-transform: uppercase;
  font-size: 1.75rem;
`