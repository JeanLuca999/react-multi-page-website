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
import { useContext } from "react/cjs/react.development";
import { GlobalContext } from "../GlobalContext";

export default function SingleItem() {
  const { theme } = useContext(GlobalContext);

  return (
    <Container>
      <ItemImage src={imgSrc}></ItemImage>
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
