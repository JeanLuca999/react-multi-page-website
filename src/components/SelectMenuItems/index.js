import { Container, Item, Icon, TextContainer, Category, Type } from "./style";

import coffe from "../../assets/coffee-icon.svg";

export default function SelectMenuItems() {
  return (
    <Container>
      <Item role={"button"} tabIndex={0}>
        <Icon src={coffe} alt="a coffe"></Icon>
        <TextContainer>
          <Category>Popular</Category>
          <Type>Breakfast</Type>
        </TextContainer>
      </Item>
    </Container>
  );
}
