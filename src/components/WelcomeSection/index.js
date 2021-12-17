import {
  WelcomeSectionWrapper,
  TextContainer,
  CursiveText,
  Title,
  Icon,
  Text,
  MetricsInfo,
  Button,
} from "./style";

import logo from "../../assets/logo.svg";

export default function WelcomeSection() {
  return (
    <WelcomeSectionWrapper>
      <TextContainer>
        <CursiveText>About Us</CursiveText>
        <Title>
          Welcome to <Icon src={logo} /> Restoran
        </Title>
        <Text>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
        </Text>
        <Text>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
        </Text>
        <MetricsInfo></MetricsInfo>
        <Button></Button>
      </TextContainer>
    </WelcomeSectionWrapper>
  );
}
