import BackgroundPage from "../components/BackgroundPage";
import BannerTitleInfo from "../components/BannerTitleInfo";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useTheme } from "../context/Theme";

export default function Contact() {
  const { theme } = useTheme();

  return (
    <>
      <BackgroundPage>
        <NavBar />
        <BannerTitleInfo title={"Contact Us"} pathName={"contact"} />
      </BackgroundPage>
      <main
        style={{
          backgroundColor: theme.backgroundColor,
          transition: "all 0.4s ease",
        }}
      >
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
