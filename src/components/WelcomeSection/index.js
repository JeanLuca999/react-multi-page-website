import {
  WelcomeSectionWrapper,
  TextContainer,
  Title,
  Icon,
  Text,
  MetricsWrapper,
  Button,
} from "./style";

import { CursiveText } from "../CursiveText";

import MetricsInfo from "../MetricsInfo";
import logo from "../../assets/logo.svg";
import GridImages from "../GridImages";
import { useTheme } from "../../context/Theme";

export default function WelcomeSection() {
  const { theme } = useTheme();

  return (
    <WelcomeSectionWrapper>
      <GridImages />
      <TextContainer>
        <CursiveText>About Us</CursiveText>
        <Title color={theme.titleColor}>
          Welcome to <Icon src={logo} alt="" /> Restoran
        </Title>
        <Text color={theme.textColor}>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
        </Text>
        <Text color={theme.textColor}>
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
