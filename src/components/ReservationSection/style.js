import styled from "styled-components";

export const Wrapper = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: 3rem auto;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;
  background-color: #0f172b;

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

export const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export const FormContainer = styled.div`
  background-color: #0f172b;
  padding: 3.125rem 2rem;
`;

export const FormTitle = styled.h2`
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  font-size: 3rem;
  color: #fff;
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 1fr);
  grid-template:
    "InputName"
    "InputEmail"
    "InputDate"
    "SelectNumberPeople"
    "TextArea"
    "Submit";

  gap: 16px;

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    grid-template:
      "InputName InputEmail"
      "InputDate SelectNumberPeople"
      "TextArea TextArea"
      "Submit Submit";
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 45%;
  transform: translateY(-50%);
  left: 1rem;
  pointer-events: none;
  color: #666565;
  transition: all 0.4s ease;
  padding-top: 3px;
`;

export const LabelContainer = styled.div`
  position: relative;

  &:nth-of-type(1) {
    grid-area: InputName;

    ${Label} {
      &:nth-of-type(1) {
        font-size: ${(props) => (props.inputNameFocus ? "0.75rem" : "1rem")};
        top: ${(props) => (props.inputNameFocus ? "calc(20% - 2px)" : "45%")};
      }
    }
  }

  &:nth-of-type(2) {
    grid-area: InputEmail;

    ${Label} {
      &:nth-of-type(1) {
        font-size: ${(props) => (props.inputEmailFocus ? "0.75rem" : "1rem")};
        top: ${(props) => (props.inputEmailFocus ? "calc(20% - 2px)" : "45%")};
      }
    }
  }

  &:nth-of-type(3) {
    grid-area: TextArea;

    ${Label} {
      &:nth-of-type(1) {
        font-size: ${(props) => (props.textAreaFocus ? "0.75rem" : "1rem")};
        top: ${(props) => (props.textAreaFocus ? "calc(20% - 2px)" : "40%")};
      }
    }
  }
`;

export const InputName = styled.input`
  width: 100%;
  height: 58px;
  padding: 0 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 1rem;
  font-family: "Heebo", sans-serif;
  outline: 0;

  &::placeholder {
    color: transparent;
  }
`;

export const InputEmail = styled.input`
  width: 100%;
  height: 58px;
  padding: 0 10px;
  padding-bottom: 10px;
  padding-top: 10px;
  font-size: 1rem;
  font-family: "Heebo", sans-serif;
  outline: 0;

  &::placeholder {
    color: transparent;
  }
`;

export const InputDate = styled.input`
  height: 58px;
  padding: 10px;
  font-family: "Heebo", sans-serif;
  grid-area: InputDate;
`;

export const SelectNumberPeople = styled.select`
  height: 58px;
  font-size: 1rem;
  color: #666565;
  padding: 10px;
  font-family: "Heebo", sans-serif;
  grid-area: SelectNumberPeople;
`;

export const Option = styled.option`
  color: #666565;
  font-size: 1rem;

  &:hover {
    background-color: #fea116;
  }
`;

export const TextArea = styled.textarea`
  display: block;
  height: 100px;
  width: 100%;
  padding: 10px;
  color: #666565;
  font-size: 1rem;
  padding-top: 30px;
  font-family: "Heebo", sans-serif;
  &::placeholder {
    color: transparent;
  }
`;

export const Submit = styled.button`
  grid-area: Submit;
  background-color: #fea116;
  font-weight: bold;
  border: 0;
  color: #fff;
  font-family: "Nunito", sans-serif;
  text-transform: uppercase;
  padding: 16px 12px;
`;
