import BackgroundPage from "../components/BackgroundPage";
import BannerTitleInfo from "../components/BannerTitleInfo";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Contact() {
  return (
    <>
      <BackgroundPage>
        <NavBar />
        <BannerTitleInfo title={"Contact Us"} pathName={"contact"} />
      </BackgroundPage>
      <main>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
