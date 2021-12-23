import BackgroundPage from "../components/BackgroundPage";
import BannerTitleInfo from "../components/BannerTitleInfo";
import Footer from "../components/Footer";
import MostPopularItemsSection from "../components/MostPopularItemsSection";
import NavBar from "../components/NavBar";

import { useEffect } from "react";

export default function Menu() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <BackgroundPage>
        <NavBar />
        <BannerTitleInfo title={"Food Menu"} pathName={"menu"} />
      </BackgroundPage>
      <main>
        <MostPopularItemsSection />
      </main>
      <Footer />
    </>
  );
}
