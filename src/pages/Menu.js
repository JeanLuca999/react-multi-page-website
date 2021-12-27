import BackgroundPage from "../components/BackgroundPage";
import BannerTitleInfo from "../components/BannerTitleInfo";
import Footer from "../components/Footer";
import MostPopularItemsSection from "../components/MostPopularItemsSection";
import NavBar from "../components/NavBar";

import { useEffect } from "react";
import { useContext } from "react/cjs/react.development";
import { GlobalContext } from "../components/GlobalContext";

export default function Menu() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { theme } = useContext(GlobalContext);

  return (
    <>
      <BackgroundPage>
        <NavBar />
        <BannerTitleInfo title={"Food Menu"} pathName={"menu"} />
      </BackgroundPage>
      <main style={{ backgroundColor: theme.backgroundColor }}>
        <MostPopularItemsSection />
      </main>
      <Footer />
    </>
  );
}
