import styled from "styled-components";

export const MenuWrapper = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.25);
  padding: 3px 6px;

  &:focus {
    border: 2px solid white;
  }
`;

export const MenuElement = styled.div`
  width: 24px;
  height: 3px;
  background-color: gray;
  margin: 3px 0;
`;
