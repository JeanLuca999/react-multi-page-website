import { CursiveText } from "../CursiveText";
import {
  ContactWrapper,
  EmailContainer,
  EmailContent,
  TextContainer,
  Title,
  EmailText,
  EmailIcon,
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
    </ContactWrapper>
  );
}
