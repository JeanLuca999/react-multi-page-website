import { CursiveText } from "../CursiveText";

import {
  CompanyLi,
  Container,
  Content,
  FooterWrapper,
  Ul,
  Link,
} from "./style";

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
        </Content>
        <Content>
          <CursiveText>Opening</CursiveText>
        </Content>
        <Content>
          <CursiveText>Newsletter</CursiveText>
        </Content>
      </Container>
    </FooterWrapper>
  );
}
