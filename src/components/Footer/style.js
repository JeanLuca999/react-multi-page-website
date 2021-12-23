import styled from "styled-components";
import { Link as anchor } from "react-router-dom";

export const FooterWrapper = styled.footer`
  background-color: #0f172b;
  padding: 2rem 0;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1500px;
  margin: 0 auto;
`;

export const Content = styled.div`
  margin: 0 10px;
  width: 100%;
  max-width: 300px;
`;

export const Ul = styled.ul`
  list-style-type: none;
`;

export const CompanyLi = styled.li``;

export const Link = styled(anchor)`
  display: block;
  font-size: 1.25rem;
  color: #fff;
  padding-left: 20px;
  margin: 7px 0;
  position: relative;
  font-family: "Nunito", sans-serif;
  text-decoration: none;

  transition: all 0.4s ease;
  &:hover {
    font-size: 1.3rem;

    @media screen and (min-width: 800px) {
      font-size: 1rem;
    }
  }
  &:nth-of-type(1) {
    margin-top: 1.25rem;
  }

  &::before {
    content: ">";
    font-family: "Poppins", sans-serif;
    font-size: 20px;
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  @media screen and (min-width: 800px) {
    font-size: 0.9rem;
  }
`;
