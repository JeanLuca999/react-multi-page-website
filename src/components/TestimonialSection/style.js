import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 1200px;
  width: 90%;
  margin: 0 auto;
  padding: 3rem 0;
`;

export const TextContainer = styled.div`
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 3rem;
  color: ${(props) => props.color};
  font-family: "Nunito", sans-serif;
  font-weight: bold;
`;

export const CardsWrapper = styled.div`
  display: flex;

  width: 100%;
  margin: 1.25rem 0;
  overflow-x: auto;
`;
