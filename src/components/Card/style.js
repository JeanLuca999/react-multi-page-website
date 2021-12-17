import styled from "styled-components";

export const Icon = styled.img`
  object-fit: contain;
  width: 48px;
  height: 48px;
`;

export const Title = styled.span`
  display: block;
  font-size: 1.25rem;
  font-weight: bolder;
  font-family: "Nunito", sans-serif;
  color: #0f172b;
  margin: 3px 0;
`;

export const Text = styled.p`
  color: #666565;
  font-size: 1rem;
`;

export const Wrapper = styled.div`
  padding: 24px;
  margin: 5px;
  max-width: 280px;
  width: 90%;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.4s ease;
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: #fea116;
    ${Title} {
      color: #fff;
    }
    ${Text} {
      color: #fff;
    }
  }
`;
