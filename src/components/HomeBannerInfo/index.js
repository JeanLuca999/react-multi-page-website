import HomeBannerImage from "../HomeBannerImage";
import HomeBannerText from "../HomeBannerText";
import { HomeBannerWrapper } from "./style";

export default function HomeBannerInfo() {
  return (
    <HomeBannerWrapper>
      <HomeBannerText />
      <HomeBannerImage />
    </HomeBannerWrapper>
  );
}
