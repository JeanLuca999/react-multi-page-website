import BackgroundPage from "../components/BackgroundPage";
import CardSection from "../components/CardSection";
import HomeBannerInfo from "../components/HomeBannerInfo";
import NavBar from "../components/NavBar";
import WelcomeSection from "../components/WelcomeSection";

export default function Home() {
  return (
    <>
      <BackgroundPage>
        <NavBar />
        <HomeBannerInfo />
      </BackgroundPage>
      <CardSection />
      <WelcomeSection />
    </>
  );
}
