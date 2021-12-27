import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  width: 90%;
  text-align: center;
  padding: 3rem 0;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2rem 0;
`;

export const Title = styled.h2`
  font-size: 3rem;
  color: ${(props) => props.color};
  font-weight: bold;
  font-family: "Nunito", sans-serif;
`;
