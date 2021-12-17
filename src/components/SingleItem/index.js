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

export default function SingleItem() {
  return (
    <Container>
      <ItemImage src={imgSrc}></ItemImage>
      <TextContainer>
        <TitleWrapper>
          <ItemTitle>Chiken Burger</ItemTitle>
          <ItemPrice>$115</ItemPrice>
        </TitleWrapper>
        <ItemDescription>
          Ipsum ipsum clita erat amet dolor justo diam
        </ItemDescription>
      </TextContainer>
    </Container>
  );
}
