import { useState } from "react";
import {
  AboutContainer,
  AboutText,
  Card,
  Icon,
  Name,
  Profession,
  Text,
  Photo,
} from "./style";

import quote_icon from "../../assets/quote-icon.svg";
import quote_icon_white from "../../assets/quote-icon--white.svg";

export default function TestimonialCard({ name, text, photo, profession }) {
  const [currentIconColor, setCurrentIconColor] = useState(quote_icon);

  return (
    <Card
      tabIndex={0}
      onMouseEnter={() => setCurrentIconColor(quote_icon_white)}
      onMouseLeave={() => setCurrentIconColor(quote_icon)}
    >
      <Icon src={currentIconColor} alt=""></Icon>
      <Text>{text}</Text>
      <AboutContainer>
        <Photo src={photo} alt={name}></Photo>
        <AboutText>
          <Name>{name}</Name>
          <Profession>{profession}</Profession>
        </AboutText>
      </AboutContainer>
    </Card>
  );
}
