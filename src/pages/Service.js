import BackgroundPage from "../components/BackgroundPage";
import BannerTitleInfo from "../components/BannerTitleInfo";
import CardSection from "../components/CardSection";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

import { useEffect } from "react";
import { useTheme } from "../context/Theme";

export default function Service() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { theme } = useTheme();

  return (
    <>
      <BackgroundPage>
        <NavBar />
        <BannerTitleInfo title={"Services"} pathName="service" />
      </BackgroundPage>
      <main
        style={{
          backgroundColor: theme.backgroundColor,
          transition: "all 0.4s ease",
        }}
      >
        <CardSection />
      </main>
      <Footer />
    </>
  );
}
