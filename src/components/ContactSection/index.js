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

export default function ContactSection() {
  return (
    <ContactWrapper>
      <TextContainer>
        <CursiveText left>Contact Us</CursiveText>
        <Title>Contact For Any Query</Title>
      </TextContainer>
      <EmailContainer>
        <EmailContent>
          <CursiveText>Booking</CursiveText>
          <EmailText>
            <EmailIcon src={message_icon} alt="" /> book@email.com
          </EmailText>
        </EmailContent>
        <EmailContent>
          <CursiveText>General</CursiveText>
          <EmailText>
            <EmailIcon src={message_icon} alt="" /> info@example.com
          </EmailText>
        </EmailContent>
        <EmailContent>
          <CursiveText>Technical</CursiveText>
          <EmailText>
            <EmailIcon src={message_icon} alt="" /> tech@example.com
          </EmailText>
        </EmailContent>
      </EmailContainer>

      <FormWrapper>
        <IFrame src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6000584.0718284445!2d-75.770041!3d42.74663!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1640364033932!5m2!1sen!2sbd"></IFrame>
        <Form>
          <LabelContainer>
            <Label>Your Name</Label>
            <InputName type={"text"}></InputName>
          </LabelContainer>
          <LabelContainer>
            <Label>Your Email</Label>
            <InputEmail type={"email"}></InputEmail>
          </LabelContainer>
          <LabelContainer>
            <Label>Subject</Label>
            <InputSubject type={"text"}></InputSubject>
          </LabelContainer>
          <LabelContainer>
            <Label>Message</Label>
            <TextArea></TextArea>
          </LabelContainer>
          <Submit>send message</Submit>
        </Form>
      </FormWrapper>
    </ContactWrapper>
  );
}
