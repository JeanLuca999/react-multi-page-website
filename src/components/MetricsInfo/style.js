import styled from "styled-components";

export const MetricsWrapper = styled.div`
  padding: 5px 10px;
  border-left: 5px solid #fea116;
  display: flex;
  align-items: center;
  margin: 1rem 0.75rem;
`;

export const MetricsNumber = styled.span`
  font-weight: 700;
  font-family: "Nunito", sans-serif;
  color: #fea116;
  font-size: 3rem;
  padding-right: 10px;
`;

export const MetricsTextContainer = styled.div``;

export const Text = styled.p`
  font-size: 1.25rem;
  color: ${(props) => props.color};

  @media screen and (min-width: 800px) {
    font-size: 1rem;
  }
`;

export const TextBold = styled.p`
  font-size: 1.25rem;
  font-weight: bolder;
  text-transform: uppercase;
  color: ${(props) => props.color};
  @media screen and (min-width: 800px) {
    font-size: 1rem;
  }
`;
