import { Container, Item, Icon, TextContainer, Category, Type } from "./style";

import coffe from "../../assets/coffee-icon.svg";
import utensils from "../../assets/logo.svg";
import hamburguer from "../../assets/hamburger-icon.svg";

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
      <Item role={"button"} tabIndex={0}>
        <Icon src={hamburguer} alt="a hamburger"></Icon>
        <TextContainer>
          <Category>Special</Category>
          <Type>Launch</Type>
        </TextContainer>
      </Item>
      <Item role={"button"} tabIndex={0}>
        <Icon src={utensils} alt="an utensil"></Icon>
        <TextContainer>
          <Category>Lovely</Category>
          <Type>Dinner</Type>
        </TextContainer>
      </Item>
    </Container>
  );
}
