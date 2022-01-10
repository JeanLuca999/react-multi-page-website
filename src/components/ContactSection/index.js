import { useState } from "react";
import { CursiveText } from "../CursiveText";
import {
  ContactWrapper,
  EmailContainer,
  EmailContent,
  TextContainer,
  Title,
  EmailText,
  EmailIcon,
  FormWrapper,
  Form,
  IFrame,
  LabelContainer,
  Label,
  TextArea,
  Submit,
  InputName,
  InputEmail,
  InputSubject,
} from "./style";

import message_icon from "../../assets/message-icon.svg";
import { useTheme } from "../../context/Theme";

export default function ContactSection() {
  const [inputNameFocus, setInputNameFocus] = useState(false);
  const [inputEmailFocus, setInputEmailFocus] = useState(false);
  const [inputSubjectFocus, setInputSubjectFocus] = useState(false);
  const [textAreaFocus, setTextAreaFocus] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const { theme } = useTheme();

  return (
    <ContactWrapper>
      <TextContainer>
        <CursiveText left>Contact Us</CursiveText>
        <Title color={theme.titleColor}>Contact For Any Query</Title>
      </TextContainer>
      <EmailContainer>
        <EmailContent>
          <CursiveText>Booking</CursiveText>
          <EmailText color={theme.textColor}>
            <EmailIcon src={message_icon} alt="" /> book@email.com
          </EmailText>
        </EmailContent>
        <EmailContent>
          <CursiveText>General</CursiveText>
          <EmailText color={theme.textColor}>
            <EmailIcon src={message_icon} alt="" /> info@example.com
          </EmailText>
        </EmailContent>
        <EmailContent>
          <CursiveText>Technical</CursiveText>
          <EmailText color={theme.textColor}>
            <EmailIcon src={message_icon} alt="" /> tech@example.com
          </EmailText>
        </EmailContent>
      </EmailContainer>

      <FormWrapper>
        <IFrame src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6000584.0718284445!2d-75.770041!3d42.74663!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1640364033932!5m2!1sen!2sbd"></IFrame>
        <Form>
          <LabelContainer>
            <Label inputNameFocus={inputNameFocus}>Your Name</Label>
            <InputName
              type={"text"}
              onFocus={() => setInputNameFocus(true)}
              onBlur={name.length ? null : () => setInputNameFocus(false)}
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></InputName>
          </LabelContainer>
          <LabelContainer>
            <Label inputEmailFocus={inputEmailFocus}>Your Email</Label>
            <InputEmail
              type={"email"}
              onFocus={() => setInputEmailFocus(true)}
              onBlur={email.length ? null : () => setInputEmailFocus(false)}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></InputEmail>
          </LabelContainer>
          <LabelContainer>
            <Label inputSubjectFocus={inputSubjectFocus}>Subject</Label>
            <InputSubject
              type={"text"}
              onFocus={() => setInputSubjectFocus(true)}
              onBlur={subject.length ? null : () => setInputSubjectFocus(false)}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            ></InputSubject>
          </LabelContainer>
          <LabelContainer>
            <Label textAreaFocus={textAreaFocus}>Message</Label>
            <TextArea
              onFocus={() => setTextAreaFocus(true)}
              onBlur={text.length ? null : () => setTextAreaFocus(false)}
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></TextArea>
          </LabelContainer>
          <Submit>send message</Submit>
        </Form>
      </FormWrapper>
    </ContactWrapper>
  );
}
