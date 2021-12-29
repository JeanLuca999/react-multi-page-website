import { Image, LogoContainer, LogoText } from "./style";
import svg from "../../assets/logo.svg";

export default function Logo() {
  return (
    <LogoContainer>
      <Image src={svg} alt="logo restoran"></Image>
      <LogoText>Restoran</LogoText>
    </LogoContainer>
  );
}
