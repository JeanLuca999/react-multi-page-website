import { useContext, useEffect } from "react/cjs/react.development";
import BackgroundPage from "../components/BackgroundPage";
import CardSection from "../components/CardSection";
import Footer from "../components/Footer";
import { GlobalContext } from "../components/GlobalContext";
import HomeBannerInfo from "../components/HomeBannerInfo";
import MostPopularItemsSection from "../components/MostPopularItemsSection";
import NavBar from "../components/NavBar";
import ReservationSection from "../components/ReservationSection";
import TeamMembersSection from "../components/TeamMembersSection";
import TestimonialSection from "../components/TestimonialSection";
import WelcomeSection from "../components/WelcomeSection";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { theme } = useContext(GlobalContext);

  return (
    <>
      <BackgroundPage>
        <NavBar />
        <HomeBannerInfo />
      </BackgroundPage>
      <main style={{ backgroundColor: theme.backgroundColor }}>
        <CardSection />
        <WelcomeSection />
        <MostPopularItemsSection />
        <ReservationSection />
        <TeamMembersSection />
        <TestimonialSection />
      </main>
      <Footer />
    </>
  );
}
