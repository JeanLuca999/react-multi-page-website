import BackgroundPage from "../components/BackgroundPage";
import NavBar from "../components/NavBar";
import BannerTitleInfo from "../components/BannerTitleInfo";
import ReservationSection from "../components/ReservationSection";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useTheme } from "../context/Theme";

export default function Booking() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { theme } = useTheme();

  return (
    <>
      <BackgroundPage>
        <NavBar />
        <BannerTitleInfo title={"Booking"} pathName={"Booking"} />
      </BackgroundPage>
      <main
        style={{
          backgroundColor: theme.backgroundColor,
          padding: "3rem 0",
          transition: "all 0.4s ease",
        }}
      >
        <ReservationSection />
      </main>
      <Footer />
    </>
  );
}
