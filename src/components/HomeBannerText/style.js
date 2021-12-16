import styled from "styled-components";

export const HomeBannerTextContainer = styled.div`
  position: relative;
  max-width: 500px;
`;

export const Title = styled.h1`
  font-size: 4rem;
  color: #fff;
  font-weight: bolder;
  font-family: "Nunito", sans-serif;
  line-height: 1.1;

  text-align: center;

  @media screen and (min-width: 800px) {
    text-align: left;
  }
`;

export const Text = styled.p`
  color: #fff;

  text-align: center;

  @media screen and (min-width: 800px) {
    text-align: left;
  }
`;

export const CTA = styled.button`
  display: block;
  border: 0;
  background-color: #fea116;
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  text-transform: uppercase;
  padding: 1rem 2rem;
  cursor: pointer;
  margin: 1.25rem auto;

  text-align: center;

  @media screen and (min-width: 800px) {
    text-align: left;
    margin: 0;
    margin: 1.25rem 0;
  }
`;
