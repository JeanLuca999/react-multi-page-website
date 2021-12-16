import Card from "../Card/index";
import { CardSectionWrapper } from "./style";

import user_tie from "../../assets/user-tie.svg";
import user_tie_white from "../../assets/user-tie--white.svg";

import utensils from "../../assets/logo.svg";
import utensils_white from "../../assets/utensils--white.svg";

import cart from "../../assets/cart.svg";
import cart_white from "../../assets/cart--white.svg";

import headset from "../../assets/headset.svg";
import headset_white from "../../assets/headset--white.svg";

export default function CardSection() {
  return (
    <CardSectionWrapper>
      <Card
        iconSrc={user_tie}
        iconSrc_white={user_tie_white}
        title={"Master Chefs"}
        text={
          "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
        }
      />

      <Card
        iconSrc={utensils}
        iconSrc_white={utensils_white}
        title={"Quality Food"}
        text={
          "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
        }
      />

      <Card
        iconSrc={cart}
        iconSrc_white={cart_white}
        title={"Online Order"}
        text={
          "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
        }
      />

      <Card
        iconSrc={headset}
        iconSrc_white={headset_white}
        title={"24/7 Service"}
        text={
          "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam"
        }
      />
    </CardSectionWrapper>
  );
}
