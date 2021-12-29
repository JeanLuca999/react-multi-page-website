import { CursiveText } from "../CursiveText";
import {
  Wrapper,
  Image,
  FormContainer,
  Form,
  FormTitle,
  InputEmail,
  InputName,
  InputDate,
  SelectNumberPeople,
  Option,
  TextArea,
  Submit,
  LabelContainer,
  Label,
} from "./style";

import { useEffect, useState } from "react";

import restoran_thumb_form_form from "../../assets/restoran-thumb-form.jpg";

export default function ReservationSection() {
  const [inputNameFocus, setInputNameFocus] = useState(false);
  const [inputEmailFocus, setInputEmailFocus] = useState(false);
  const [textAreaFocus, setTextAreaFocus] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    name.length > 0 ? setInputNameFocus(true) : setInputNameFocus(false);
  }, [name]);

  useEffect(() => {
    email.length > 0 ? setInputEmailFocus(true) : setInputEmailFocus(false);
  }, [email]);

  useEffect(() => {
    text.length > 0 ? setTextAreaFocus(true) : setTextAreaFocus(false);
  }, [text]);

  return (
    <Wrapper>
      <Image alt="" src={restoran_thumb_form_form} />
      <FormContainer>
        <CursiveText>Reservation</CursiveText>
        <FormTitle>Book a Table Online</FormTitle>
        <Form>
          <LabelContainer inputNameFocus={inputNameFocus}>
            <Label htmlFor="inputName">Your Name</Label>
            <InputName
              id="inputName"
              type={"text"}
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setInputNameFocus(true)}
              onBlur={name.length > 0 ? null : () => setInputNameFocus(false)}
            />
          </LabelContainer>

          <LabelContainer inputEmailFocus={inputEmailFocus}>
            <Label htmlFor="inputEmail">Your Email</Label>
            <InputEmail
              id="inputEmail"
              type={"email"}
              placeholder="Your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setInputEmailFocus(true)}
              onBlur={email.length > 0 ? null : () => setInputEmailFocus(false)}
            />
          </LabelContainer>

          <InputDate type={"date"} />
          <SelectNumberPeople>
            <Option>People 1</Option>
            <Option>People 2</Option>
            <Option>People 3</Option>
          </SelectNumberPeople>
          <LabelContainer textAreaFocus={textAreaFocus}>
            <Label htmlFor="TextArea">Special Request</Label>
            <TextArea
              id="TextArea"
              placeholder="Special Request"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onFocus={() => setTextAreaFocus(true)}
              onBlur={text.length > 0 ? null : () => setTextAreaFocus(false)}
            ></TextArea>
          </LabelContainer>
          <Submit>Book a table online</Submit>
        </Form>
      </FormContainer>
    </Wrapper>
  );
}
