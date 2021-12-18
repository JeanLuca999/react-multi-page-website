import {
  Card,
  Designation,
  Figure,
  Image,
  Name,
  IconsWrapper,
  Icon,
  IconContainer,
} from "./style";

import facebook_icon from "../../assets/facebook-icon.svg";
import instagram_icon from "../../assets/instagram-icon.svg";
import twitter_icon from "../../assets/twitter-icon.svg";

export default function CardTeamMember({ name, imgSrc, designation }) {
  return (
    <Card tabIndex={0}>
      <Figure>
        <Image src={imgSrc} alt={name}></Image>
      </Figure>
      <Name>{name}</Name>
      <Designation>{designation}</Designation>
      <IconsWrapper>
        <IconContainer>
          <Icon src={facebook_icon} tabIndex={0} />
        </IconContainer>
        <IconContainer>
          <Icon src={twitter_icon} tabIndex={0} />
        </IconContainer>
        <IconContainer>
          <Icon src={instagram_icon} tabIndex={0} />
        </IconContainer>
      </IconsWrapper>
    </Card>
  );
}
