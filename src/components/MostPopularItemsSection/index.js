import { CursiveText } from "../CursiveText";
import SelectMenuItems from "../SelectMenuItems";
import { Wrapper, Title, TextContainer } from "./style";
import WrapperMenuItems from "../WrapperMenuItems";
import { useTheme } from "../../context/Theme";

export default function MostPopularItemsSection() {
  const { theme } = useTheme();

  return (
    <Wrapper>
      <TextContainer>
        <CursiveText left={true}>Food Menu</CursiveText>
        <Title color={theme.titleColor}>Most Popular Items</Title>
        <SelectMenuItems />
      </TextContainer>
      <WrapperMenuItems />
    </Wrapper>
  );
}
