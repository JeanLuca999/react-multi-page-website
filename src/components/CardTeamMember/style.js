import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  transition: all 0.4s ease;
`;

export const IconsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
  position: absolute;
  bottom: -35px;
  height: 35px;
  overflow-y: hidden;
  transition: all 0.5s ease;
`;

export const Card = styled.div`
  position: relative;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
  max-width: 290px;
  height: 380px;
  margin: 5px;
  padding: 30px 40px;
  overflow-y: hidden;
  transition: all 0.5s ease;

  &:hover,
  &:focus,
  &:focus-within {
    height: 400px;
    ${Image} {
      transform: scale(1.1);
    }

    ${IconsWrapper} {
      bottom: 0;
    }
  }

  @media screen and (min-width: 800px) {
    height: 400px;

    &:hover,
    &:focus,
    &:focus-within {
      height: 420px;
    }
  }
`;

export const Figure = styled.figure`
  max-width: 220px;
  width: 100%;
  height: max-content;
  overflow: hidden;
  border-radius: 50%;
`;

export const Name = styled.h3`
  color: #0f172b;
  font-size: 1.75rem;
  font-family: "Nunito", sans-serif;
  margin-top: 1rem;
`;

export const Designation = styled.p`
  color: #666565;
  font-size: 1.25rem;

  @media screen and (min-width: 800px) {
    font-size: 1rem;
  }
`;

export const Icon = styled.img`
  object-fit: contain;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fea116;
  width: 35px;
  height: 35px;
  padding: 7px 5px;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
`;
