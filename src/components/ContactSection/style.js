import styled from "styled-components";

export const ContactWrapper = styled.section`
  padding: 3rem 0;
  max-width: 1200px;
  margin: 0 auto;
  width: 90%;
`;

export const TextContainer = styled.div`
  text-align: center;
`;

export const Title = styled.h2`
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  color: #0f172b;
  font-size: 3rem;
`;

export const EmailContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 2rem 0;

  @media screen and (min-width: 800px) {
    justify-content: center;
  }
`;

export const EmailContent = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 1.25rem 0;
`;

export const EmailText = styled.p`
  color: #666565;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 1rem 0;

  @media screen and (min-width: 800px) {
    font-size: 1rem;
  }
`;

export const EmailIcon = styled.img`
  object-fit: contain;
  width: 25px;
  height: 25px;
`;
