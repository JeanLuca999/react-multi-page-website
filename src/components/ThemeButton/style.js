import styled from "styled-components";

export const Button = styled.button`
  background-color: #fff;
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
  font-weight: bold;
  border: 3px solid ${(props) => props.color};
  border-radius: 10px;
  padding: 8px 10px;
  color: ${(props) => props.color};
  background-color: ${(props) => (props.color === "#fff" ? "#181818" : "#fff")};
  cursor: pointer;
  transition: all 0.4s ease;
`;
