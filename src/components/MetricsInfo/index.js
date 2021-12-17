import {
  MetricsWrapper,
  MetricsNumber,
  MetricsTextContainer,
  Text,
  TextBold,
} from "./style";

export default function MetricsInfo({ number, text, textBold }) {
  return (
    <MetricsWrapper>
      <MetricsNumber>{number}</MetricsNumber>
      <MetricsTextContainer>
        <Text>{text}</Text>
        <TextBold>{textBold}</TextBold>
      </MetricsTextContainer>
    </MetricsWrapper>
  );
}
