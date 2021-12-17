import {
  WelcomeSectionWrapper,
  TextContainer,
  CursiveText,
  Title,
  Icon,
  Text,
  MetricsWrapper,
  Button,
} from "./style";

import MetricsInfo from "../MetricsInfo";
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
        <MetricsWrapper>
          <MetricsInfo
            number={15}
            text={"Years of"}
            textBold={"Experience"}
          ></MetricsInfo>
          <MetricsInfo
            number={50}
            text={"Popular"}
            textBold={"Master chefs"}
          ></MetricsInfo>
        </MetricsWrapper>
        <Button>read more</Button>
      </TextContainer>
    </WelcomeSectionWrapper>
  );
}
