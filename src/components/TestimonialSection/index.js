import { CursiveText } from "../CursiveText";
import TestemonialCard from "../TestimonialCard/";
import { Wrapper, TextContainer, CardsWrapper, Title } from "./style";

import client01 from "../../assets/chef01.jpg";
import { useContext } from "react/cjs/react.development";
import { GlobalContext } from "../GlobalContext";

export default function TestimonialSection() {
  const { theme } = useContext(GlobalContext);

  return (
    <Wrapper>
      <TextContainer>
        <CursiveText left>Testimonial</CursiveText>
        <Title color={theme.titleColor}>Our Clients Say!!!</Title>
      </TextContainer>
      <CardsWrapper>
        <TestemonialCard
          name={"Client Name"}
          profession={"profession"}
          text={
            "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam"
          }
          photo={client01}
        />
        <TestemonialCard
          name={"Client Name"}
          profession={"profession"}
          text={
            "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam"
          }
          photo={client01}
        />
        <TestemonialCard
          name={"Client Name"}
          profession={"profession"}
          text={
            "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam"
          }
          photo={client01}
        />
        <TestemonialCard
          name={"Client Name"}
          profession={"profession"}
          text={
            "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam"
          }
          photo={client01}
        />
        <TestemonialCard
          name={"Client Name"}
          profession={"profession"}
          text={
            "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam"
          }
          photo={client01}
        />
      </CardsWrapper>
    </Wrapper>
  );
}
