import BackgroundPage from "../components/BackgroundPage";
import NavBar from "../components/NavBar";
import BannerTitleInfo from "../components/BannerTitleInfo";
import ReservationSection from "../components/ReservationSection";
import Footer from "../components/Footer";
import { useEffect } from "react";
import { useContext } from "react/cjs/react.development";
import { GlobalContext } from "../components/GlobalContext";

export default function Booking() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { theme } = useContext(GlobalContext);

  return (
    <>
      <BackgroundPage>
        <NavBar />
        <BannerTitleInfo title={"Booking"} pathName={"Booking"} />
      </BackgroundPage>
      <main
        style={{ backgroundColor: theme.backgroundColor, padding: "3rem 0" }}
      >
        <ReservationSection />
      </main>
      <Footer />
    </>
  );
}
