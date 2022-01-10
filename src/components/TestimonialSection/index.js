import { CursiveText } from "../CursiveText";
import TestemonialCard from "../TestimonialCard/";
import { Wrapper, TextContainer, Title } from "./style";

import client01 from "../../assets/chef01.jpg";
import ReactElasticCarousel from "react-elastic-carousel";
import { useTheme } from "../../context/Theme";

export default function TestimonialSection() {
  const { theme } = useTheme();
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];

  return (
    <Wrapper>
      <TextContainer>
        <CursiveText left>Testimonial</CursiveText>
        <Title color={theme.titleColor}>Our Clients Say!!!</Title>
      </TextContainer>
      <ReactElasticCarousel breakPoints={breakPoints}>
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
      </ReactElasticCarousel>
    </Wrapper>
  );
}
