import styled from "styled-components";

export const BackgroundWrapper = styled.div`
  position: relative;
  background-image: url(${(props) => props.backgroundSrc});
  min-height: 60vh;
  background-position: center;
  background-size: cover;
  padding-top: 75px;

  &::before {
    position: absolute;
    z-index: 0;
    content: "";
    display: block;
    background-color: rgba(15, 23, 43, 0.9);
    inset: 0;
  }
`;
