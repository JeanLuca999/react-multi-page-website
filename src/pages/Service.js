import BackgroundPage from "../components/BackgroundPage";
import BannerTitleInfo from "../components/BannerTitleInfo";
import CardSection from "../components/CardSection";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import { useEffect } from "react";

export default function Service() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BackgroundPage>
        <NavBar />
        <BannerTitleInfo title={"Services"} pathName="service" />
      </BackgroundPage>
      <main>
        <CardSection />
      </main>
      <Footer />
    </>
  );
}
