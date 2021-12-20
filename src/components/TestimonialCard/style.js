import styled from "styled-components";

export const Icon = styled.img`
  object-fit: contain;
  width: 40px;
  height: 40px;
`;

export const Text = styled.p`
  font-size: 1.25rem;
  color: #666565;
  margin: 3px 0;

  @media screen and (min-width: 800px) {
    font-size: 1rem;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 10px;
`;

export const Photo = styled.img`
  object-fit: cover;
  width: 100%;
  max-width: 52px;
  flex-shrink: 0;
  border-radius: 50%;
`;

export const AboutText = styled.div`
  padding-left: 10px;
`;

export const Name = styled.span`
  display: block;
  font-family: "Nunito", sans-serif;
  font-size: 1.25rem;
  font-weight: bold;
`;

export const Profession = styled.span`
  display: block;
  color: #666565;
  font-size: 0.8rem;
`;

export const Card = styled.div`
  padding: 1.25rem 1rem;
  border: 1px solid lightgray;

  max-width: 400px;
  width: 100%;
  flex-shrink: 0;
  margin: 0 5px;

  &:hover,
  &:focus,
  &:focus-within {
    background-color: #fea116;
    ${Text}, ${Name}, ${Profession} {
      color: #fff;
    }
  }
`;
