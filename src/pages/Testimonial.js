import { useEffect } from "react";
import BackgroundPage from "../components/BackgroundPage";
import BannerTitleInfo from "../components/BannerTitleInfo";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import TestimonialSection from "../components/TestimonialSection";

export default function Testimonial() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BackgroundPage>
        <NavBar />
        <BannerTitleInfo title={"Testimonial"} pathName={"testimonial"} />
      </BackgroundPage>
      <main>
        <TestimonialSection />
      </main>
      <Footer />
    </>
  );
}
