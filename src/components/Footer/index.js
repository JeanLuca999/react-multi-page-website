import { CursiveText } from "../CursiveText";

import {
  CompanyLi,
  Container,
  Content,
  FooterWrapper,
  Ul,
  Link,
  ContactLi,
  OpeningTitle,
  OpeningText,
  OpeningLi,
  NewsletterLi,
  NewsletterText,
  InputContainer,
  Input,
  Submit,
  ContactIcons,
  IconContainer,
  Icon,
} from "./style";

import instagram_icon from "../../assets/instagram-icon.svg";
import facebook_icon from "../../assets/facebook-icon.svg";
import twitter_icon from "../../assets/twitter-icon.svg";

export default function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <Content>
          <CursiveText>Company</CursiveText>
          <Ul>
            <CompanyLi>
              <Link to={"/"}>About Us</Link>
            </CompanyLi>
            <CompanyLi>
              <Link to={"/"}>Contact Us</Link>
            </CompanyLi>
            <CompanyLi>
              <Link to={"/"}>Reservation</Link>
            </CompanyLi>
            <CompanyLi>
              <Link to={"/"}>Privacy Policy</Link>
            </CompanyLi>
            <CompanyLi>
              <Link to={"/"}>Terms {`&`} Condition</Link>
            </CompanyLi>
          </Ul>
        </Content>
        <Content>
          <CursiveText>Contact</CursiveText>
          <Ul>
            <ContactLi>
              <Link to={"/"}>123 Street New York USA</Link>
            </ContactLi>
            <ContactLi>
              <Link to={"/"}>+012 345 67890</Link>
            </ContactLi>
            <ContactLi>
              <Link to={"/"}>info@example.com</Link>
            </ContactLi>
            <ContactIcons>
              <IconContainer>
                <Icon src={twitter_icon} alt="twitter"></Icon>
              </IconContainer>
              <IconContainer>
                <Icon src={facebook_icon} alt="facebook"></Icon>
              </IconContainer>
              <IconContainer>
                <Icon src={instagram_icon} alt="instagram"></Icon>
              </IconContainer>
            </ContactIcons>
          </Ul>
        </Content>
        <Content>
          <CursiveText>Opening</CursiveText>
          <Ul>
            <OpeningLi>
              <OpeningTitle>Monday - Saturday</OpeningTitle>
              <OpeningText>09am - 09pm</OpeningText>
            </OpeningLi>

            <OpeningLi>
              <OpeningTitle>Sunday</OpeningTitle>
              <OpeningText>10am - 08pm</OpeningText>
            </OpeningLi>
          </Ul>
        </Content>
        <Content>
          <CursiveText>Newsletter</CursiveText>
          <Ul>
            <NewsletterLi>
              <NewsletterText>
                Dolor amet sit justo amet elitr clita ipsum elitr est.
              </NewsletterText>
              <InputContainer>
                <Input type="email" placeholder="Your email"></Input>
                <Submit>signup</Submit>
              </InputContainer>
            </NewsletterLi>
          </Ul>
        </Content>
      </Container>
    </FooterWrapper>
  );
}
