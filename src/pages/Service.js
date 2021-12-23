import BackgroundPage from "../components/BackgroundPage";
import BannerTitleInfo from "../components/BannerTitleInfo";
import CardSection from "../components/CardSection";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Service() {
  return (
    <>
      <BackgroundPage>
        <NavBar />
        <BannerTitleInfo title={"Services"} pathName="service" />
      </BackgroundPage>
      <main>
        <CardSection />
      </main>
      <Footer />
    </>
  );
}
