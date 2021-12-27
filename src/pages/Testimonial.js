import { useEffect } from "react";
import { useContext } from "react/cjs/react.development";
import BackgroundPage from "../components/BackgroundPage";
import BannerTitleInfo from "../components/BannerTitleInfo";
import Footer from "../components/Footer";
import { GlobalContext } from "../components/GlobalContext";
import NavBar from "../components/NavBar";
import TestimonialSection from "../components/TestimonialSection";

export default function Testimonial() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { theme } = useContext(GlobalContext);

  return (
    <>
      <BackgroundPage>
        <NavBar />
        <BannerTitleInfo title={"Testimonial"} pathName={"testimonial"} />
      </BackgroundPage>
      <main style={{ backgroundColor: theme.backgroundColor }}>
        <TestimonialSection />
      </main>
      <Footer />
    </>
  );
}
