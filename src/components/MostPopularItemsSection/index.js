import { CursiveText } from "../CursiveText";
import SelectMenuItems from "../SelectMenuItems";
import { Wrapper, Title, TextContainer } from "./style";

export default function MostPopularItemsSection() {
  return (
    <Wrapper>
      <TextContainer>
        <CursiveText left={true}>Food Menu</CursiveText>
        <Title>Most Popular Items</Title>
        <SelectMenuItems />
      </TextContainer>
    </Wrapper>
  );
}
