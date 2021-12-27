import { useContext } from "react/cjs/react.development";
import { GlobalContext } from "../GlobalContext";
import {
  MetricsWrapper,
  MetricsNumber,
  MetricsTextContainer,
  Text,
  TextBold,
} from "./style";

export default function MetricsInfo({ number, text, textBold }) {
  const { theme } = useContext(GlobalContext);

  return (
    <MetricsWrapper>
      <MetricsNumber>{number}</MetricsNumber>
      <MetricsTextContainer>
        <Text color={theme.textColor}>{text}</Text>
        <TextBold color={theme.textColor}>{textBold}</TextBold>
      </MetricsTextContainer>
    </MetricsWrapper>
  );
}
