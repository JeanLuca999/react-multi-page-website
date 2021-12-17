import { Image, PaddingImage, Wrapper } from "./style";

import restaurant01 from "../../assets/restaurant01.jpg";
import restaurant02 from "../../assets/restaurant02.jpg";

import food01 from "../../assets/food01.jpg";
import food02 from "../../assets/food02.jpg";

export default function GridImages() {
  return (
    <Wrapper>
      <Image src={restaurant01} alt="restaurant" />
      <PaddingImage src={restaurant02} alt="restaurant" />
      <PaddingImage src={food01} alt="food" />
      <Image src={food02} alt="food" />
    </Wrapper>
  );
}
