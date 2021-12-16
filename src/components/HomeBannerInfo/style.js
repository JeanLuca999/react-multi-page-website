import styled from "styled-components";

export const HomeBannerWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 0;

  @media screen and (max-width: 1100px) {
    justify-content: center;
  }
`;
