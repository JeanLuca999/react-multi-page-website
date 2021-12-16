import { Image, Figure } from "./style";

import imgSrc from "../../assets/food.png";

export default function HomeBannerImage() {
  return (
    <Figure>
      <Image alt="food" src={imgSrc}></Image>
    </Figure>
  );
}
