import CardTeamMember from "../CardTeamMember";
import { CardsContainer, Title, Wrapper } from "./style";

import chef01 from "../../assets/chef01.jpg";
import chef02 from "../../assets/chef02.jpg";
import chef03 from "../../assets/chef03.jpg";
import chef04 from "../../assets/chef04.jpg";
import { CursiveText } from "../CursiveText";

export default function TeamMembersSection() {
  return (
    <Wrapper>
      <CursiveText left>Team Members</CursiveText>
      <Title>Our Master Chefs</Title>
      <CardsContainer>
        <CardTeamMember
          imgSrc={chef01}
          name={"jonh doe"}
          designation={"chef"}
        />
        <CardTeamMember
          imgSrc={chef02}
          name={"jonh doe"}
          designation={"chef"}
        />
        <CardTeamMember
          imgSrc={chef03}
          name={"jonh doe"}
          designation={"chef"}
        />
        <CardTeamMember
          imgSrc={chef04}
          name={"jonh doe"}
          designation={"chef"}
        />
      </CardsContainer>
    </Wrapper>
  );
}