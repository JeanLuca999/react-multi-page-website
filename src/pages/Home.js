import BackgroundPage from "../components/BackgroundPage";
import CardSection from "../components/CardSection";
import HomeBannerInfo from "../components/HomeBannerInfo";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <BackgroundPage>
        <NavBar />
        <HomeBannerInfo />
      </BackgroundPage>
      <CardSection />
    </>
  );
}
