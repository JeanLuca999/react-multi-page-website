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

export const FormWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr;

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
`;

export const IFrame = styled.iframe`
  width: 100%;
  height: 100%;
`;

export const Form = styled.form`
  padding-top: 1rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1fr);
  grid-template:
    "name"
    "email"
    "subject"
    "textmessage"
    "submit";
  gap: 16px;

  @media screen and (min-width: 800px) {
    padding-left: 1rem;
    padding-top: 0;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(4, 1fr);
    grid-template:
      "name email"
      "subject subject"
      "textmessage textmessage"
      "submit submit";
  }
`;

export const LabelContainer = styled.div`
  position: relative;

  &:nth-of-type(1) {
    grid-area: name;
  }
  &:nth-of-type(2) {
    grid-area: email;
  }
  &:nth-of-type(3) {
    grid-area: subject;
  }
  &:nth-of-type(4) {
    grid-area: textmessage;
  }

  &:focus,
  &:hover {
    background-color: red;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: #666565;
  font-size: 1rem;
  pointer-events: none;
  padding-left: 20px;
  transition: all 0.4s ease;

  ${(props) => (props.inputNameFocus ? "font-size: 0.7rem; top: 25%;" : "")};
  ${(props) => (props.inputEmailFocus ? "font-size: 0.7rem; top: 25%;" : "")};
  ${(props) => (props.inputSubjectFocus ? "font-size: 0.7rem; top: 25%;" : "")};
  ${(props) => (props.textAreaFocus ? "font-size: 0.7rem; top: 25%;" : "")};
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  color: #666565;
  font-size: 1rem;
  border: 1px solid lightgray;
  outline: 0;
  padding-left: 20px;
  padding-top: 12px;

  &:focus {
    box-shadow: 0 0 5px #fea116;
    border: 0;
  }
`;

export const InputName = styled(Input)``;

export const InputEmail = styled(Input)``;

export const InputSubject = styled(Input)``;

export const TextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 100px;
  border: 1px solid lightgray;
  outline: 0;
  padding-left: 20px;
  padding-top: 40px;
  font-family: "Heebo", sans-serif;
  font-size: 0.9rem;

  &:focus {
    box-shadow: 0 0 5px #fea116;
    border: 0;
  }
`;

export const Submit = styled.button`
  font-family: "Nunito", sans-serif;
  font-size: 1rem;
  color: #fff;
  background-color: #fea116;
  text-transform: uppercase;
  grid-area: submit;
  padding: 16px;
  cursor: pointer;

  border: 0;
`;
