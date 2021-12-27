import { useContext } from "react/cjs/react.development";
import BackgroundPage from "../components/BackgroundPage";
import BannerTitleInfo from "../components/BannerTitleInfo";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import { GlobalContext } from "../components/GlobalContext";
import NavBar from "../components/NavBar";

export default function Contact() {
  const { theme } = useContext(GlobalContext);

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
