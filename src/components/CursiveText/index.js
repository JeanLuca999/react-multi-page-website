import styled from "styled-components";

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
    left: 110%;
  }

  &::after {
    position: absolute;
    display: ${(props) => (props.left ? "block" : "none")};
    content: "";
    width: 40px;
    height: 2px;
    background-color: #fea116;
    top: 50%;
    right: 110%;
  }
`;
