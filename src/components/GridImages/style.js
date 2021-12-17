import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 1.25rem;
  padding: 1.5rem;
  padding-right: 2rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const PaddingImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;

  &:nth-of-type(2) {
    padding-right: 4rem;
    padding-top: 4rem;
  }

  &:nth-of-type(3) {
    padding-left: 4rem;
    padding-bottom: 4rem;
  }
`;
