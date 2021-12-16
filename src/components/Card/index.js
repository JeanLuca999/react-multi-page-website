import { Wrapper, Icon, Title, Text } from "./style";
import { useState } from "react";

export default function Card({ iconSrc, title, text, iconSrc_white }) {
  const [currentSrc, setCurrentSrc] = useState(iconSrc);

  return (
    <Wrapper
      onMouseEnter={() => setCurrentSrc(iconSrc_white)}
      onMouseLeave={() => setCurrentSrc(iconSrc)}
    >
      <Icon src={currentSrc} alt="icon"></Icon>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Wrapper>
  );
}
