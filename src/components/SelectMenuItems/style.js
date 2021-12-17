import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
`;

export const Item = styled.div`
  display: flex;
  cursor: pointer;
  transition: all 0.4s ease;
  outline: 0;
  border-bottom: 3px solid transparent;

  &:hover,
  &:focus {
    border-bottom: 3px solid #fea116;
  }
`;

export const Icon = styled.img`
  width: 55px;
  height: 55px;
  object-fit: contain;
  padding-right: 1rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Type = styled.p`
  font-size: 1.25rem;
  color: #0f172b;
  font-weight: bold;
  font-family: "Nunito", sans-serif;

  @media screen and (min-width: 800px) {
    font-size: 1rem;
  }
`;

export const Category = styled.p`
  font-size: 1.25rem;
  color: #666565;
  text-align: left;

  @media screen and (min-width: 800px) {
    font-size: 0.9rem;
  }
`;
