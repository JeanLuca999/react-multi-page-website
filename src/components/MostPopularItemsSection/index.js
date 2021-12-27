import { CursiveText } from "../CursiveText";
import SelectMenuItems from "../SelectMenuItems";
import { Wrapper, Title, TextContainer } from "./style";
import WrapperMenuItems from "../WrapperMenuItems";
import { useContext } from "react/cjs/react.development";
import { GlobalContext } from "../GlobalContext";

export default function MostPopularItemsSection() {
  const { theme } = useContext(GlobalContext);

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
