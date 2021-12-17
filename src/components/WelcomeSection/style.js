import styled from "styled-components";

export const WelcomeSectionWrapper = styled.section`
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

export const TextContainer = styled.div``;

export const CursiveText = styled.span`
  position: relative;
  font-family: "Pacifico", cursive;
  font-size: 1.25rem;
  color: #fea116;

  &::before {
    position: absolute;
    display: block;
    content: "";
    width: 40px;
    height: 2px;
    background-color: #fea116;
    top: 50%;
    right: calc(-60% - 10px);

    @media screen and (min-width: 800px) {
      right: -60%;
    }
  }

  &::after {
    position: absolute;
    display: ${(props) => (props.left ? "block" : "none")};
    content: "";
    width: 40px;
    height: 2px;
    background-color: #fea116;
    top: 50%;
    right: calc(110% + 10px);

    @media screen and (min-width: 800px) {
      right: 110%;
    }
  }
`;

export const Title = styled.h2`
  font-family: "Nunito", sans-serif;
  font-size: 2rem;
  color: #0f172b;
  font-weight: bolder;
  margin-bottom: 1rem;
`;

export const Icon = styled.img`
  display: inline;
  width: 2rem;
  height: 2rem;
  object-fit: contain;
`;

export const Text = styled.p`
  color: #666565;
  font-size: 1.25rem;
  line-height: 1.2;
  margin-bottom: 1rem;

  @media screen and (min-width: 800px) {
    font-size: 1rem;
  }
`;

export const MetricsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 800px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Button = styled.button`
  background-color: #fea116;
  font-size: 1.25rem;
  padding: 1rem 3rem;
  text-transform: uppercase;
  color: white;
  border: 0;
  font-weight: bold;
  margin: 1rem 0;
  cursor: pointer;

  @media screen and (min-width: 800px) {
    font-size: 1rem;
  }
`;
