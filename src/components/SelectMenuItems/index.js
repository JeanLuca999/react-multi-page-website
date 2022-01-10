import { Container, Item, Icon, TextContainer, Category, Type } from "./style";

import coffe from "../../assets/coffee-icon.svg";
import utensils from "../../assets/logo.svg";
import hamburguer from "../../assets/hamburger-icon.svg";
import { useTheme } from "../../context/Theme";

export default function SelectMenuItems() {
  const { theme } = useTheme();

  return (
    <Container>
      <Item role={"button"} tabIndex={0}>
        <Icon src={coffe} alt="a coffe"></Icon>
        <TextContainer>
          <Category color={theme.textColor}>Popular</Category>
          <Type color={theme.titleColor}>Breakfast</Type>
        </TextContainer>
      </Item>
      <Item role={"button"} tabIndex={0}>
        <Icon src={hamburguer} alt="a hamburger"></Icon>
        <TextContainer>
          <Category color={theme.textColor}>Special</Category>
          <Type color={theme.titleColor}>Launch</Type>
        </TextContainer>
      </Item>
      <Item role={"button"} tabIndex={0}>
        <Icon src={utensils} alt="an utensil"></Icon>
        <TextContainer>
          <Category color={theme.textColor}>Lovely</Category>
          <Type color={theme.titleColor}>Dinner</Type>
        </TextContainer>
      </Item>
    </Container>
  );
}
