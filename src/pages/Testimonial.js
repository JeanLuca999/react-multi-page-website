import { useEffect } from "react";
import BackgroundPage from "../components/BackgroundPage";
import BannerTitleInfo from "../components/BannerTitleInfo";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import TestimonialSection from "../components/TestimonialSection";
import { useTheme } from "../context/Theme";

export default function Testimonial() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { theme } = useTheme();

  return (
    <>
      <BackgroundPage>
        <NavBar />
        <BannerTitleInfo title={"Testimonial"} pathName={"testimonial"} />
      </BackgroundPage>
      <main
        style={{
          backgroundColor: theme.backgroundColor,
          transition: "all 0.4s ease",
        }}
      >
        <TestimonialSection />
      </main>
      <Footer />
    </>
  );
}
