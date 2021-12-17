import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  max-width: 550px;
  margin: 15px 0;
  padding-right: 10px;

  @media screen and (min-width: 800px) {
    padding-right: 30px;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  padding-left: 24px;
`;

export const ItemImage = styled.img`
  object-fit: cover;
  width: 80px;
  height: 80px;
`;

export const ItemPrice = styled.p`
  font-weight: bold;
  font-size: 1.25rem;
  color: #fea116;
  font-family: "Nunito", sans-serif;
`;

export const ItemDescription = styled.p`
  font-size: 1rem;
  color: #666565;
  margin: 5px 0;
`;

export const ItemTitle = styled.span`
  color: black;
  font-weight: bold;
  font-family: "Nunito", sans-serif;
  font-size: 1.25rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid lightgray;
  padding-bottom: 10px;
`;
