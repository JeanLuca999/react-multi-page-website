import BackgroundPage from "../components/BackgroundPage";
import NavBar from "../components/NavBar";
import BannerTitleInfo from "../components/BannerTitleInfo";
import ReservationSection from "../components/ReservationSection";
import Footer from "../components/Footer";
import { useEffect } from "react";

export default function Booking() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BackgroundPage>
        <NavBar />
        <BannerTitleInfo title={"Booking"} pathName={"Booking"} />
      </BackgroundPage>
      <main>
        <ReservationSection />
      </main>
      <Footer />
    </>
  );
}
