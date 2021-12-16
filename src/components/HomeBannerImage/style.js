import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Image = styled.img`
  position: relative;
  display: block;
  object-fit: contain;
  object-position: center;
  width: 100%;
  animation-name: ${rotate};
  animation-timing-function: linear;
  animation-duration: 60s;
  animation-iteration-count: infinite;
`;

export const Figure = styled.figure`
  width: 60%;
  max-width: 500px;
`;
