import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 40vh;
`;

export const InfoContainer = styled.div`
  max-width: 700px;
  width: 90%;
`;

export const Title = styled.h1`
  color: #fff;
  font-family: "Nunito", sans-serif;
  font-size: 4rem;
  text-align: center;
`;

export const PathContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const Text = styled.span`
  color: ${(props) => (props.color ? props.color : "#fff")};
  font-size: 1.25rem;
  text-transform: uppercase;

  @media screen and (min-width: 800px) {
    font-size: 1rem;
  }
`;
