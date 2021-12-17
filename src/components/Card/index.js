import { Wrapper, Icon, Title, Text } from "./style";
import { useState } from "react";

export default function Card({ iconSrc, title, text, iconSrc_white }) {
  const [currentSrc, setCurrentSrc] = useState(iconSrc);

  return (
    <Wrapper
      tabIndex={0}
      onMouseEnter={() => setCurrentSrc(iconSrc_white)}
      onMouseLeave={() => setCurrentSrc(iconSrc)}
      onFocus={() => setCurrentSrc(iconSrc_white)}
      onBlur={() => setCurrentSrc(iconSrc)}
    >
      <Icon src={currentSrc} alt="icon"></Icon>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </Wrapper>
  );
}
