import BackgroundPage from "../components/BackgroundPage";
import BannerTitleInfo from "../components/BannerTitleInfo";
import Footer from "../components/Footer";
import MostPopularItemsSection from "../components/MostPopularItemsSection";
import NavBar from "../components/NavBar";

import { useEffect } from "react";
import { useTheme } from "../context/Theme";

export default function Menu() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { theme } = useTheme();

  return (
    <>
      <BackgroundPage>
        <NavBar />
        <BannerTitleInfo title={"Food Menu"} pathName={"menu"} />
      </BackgroundPage>
      <main
        style={{
          backgroundColor: theme.backgroundColor,
          transition: "all 0.4s ease",
        }}
      >
        <MostPopularItemsSection />
      </main>
      <Footer />
    </>
  );
}
