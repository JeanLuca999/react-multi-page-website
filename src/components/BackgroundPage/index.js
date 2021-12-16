import { BackgroundWrapper } from "./style";

import background from "../../assets/background.jpg";

export default function BackgroundPage({ children }) {
  return (
    <BackgroundWrapper backgroundSrc={background}>{children}</BackgroundWrapper>
  );
}
