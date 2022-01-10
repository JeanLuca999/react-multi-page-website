import {
  Container,
  ItemDescription,
  ItemImage,
  ItemPrice,
  ItemTitle,
  TextContainer,
  TitleWrapper,
} from "./style";

import imgSrc from "../../assets/food01.jpg";
import { useTheme } from "../../context/Theme";

export default function SingleItem() {
  const { theme } = useTheme();

  return (
    <Container>
      <ItemImage src={imgSrc} alt="Chiken Burger"></ItemImage>
      <TextContainer>
        <TitleWrapper>
          <ItemTitle color={theme.titleColor}>Chiken Burger</ItemTitle>
          <ItemPrice>$115</ItemPrice>
        </TitleWrapper>
        <ItemDescription color={theme.textColor}>
          Ipsum ipsum clita erat amet dolor justo diam
        </ItemDescription>
      </TextContainer>
    </Container>
  );
}
