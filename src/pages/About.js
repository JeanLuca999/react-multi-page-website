import { useEffect } from "react/cjs/react.development";
import { useTheme } from "../context/Theme";
import BackgroundPage from "../components/BackgroundPage";
import BannerTitleInfo from "../components/BannerTitleInfo";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import TeamMembersSection from "../components/TeamMembersSection";
import WelcomeSection from "../components/WelcomeSection";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { theme } = useTheme();

  return (
    <>
      <BackgroundPage>
        <NavBar />
        <BannerTitleInfo title={"About Us"} pathName={"About"} />
      </BackgroundPage>
      <main
        style={{
          backgroundColor: theme.backgroundColor,
          transition: "all 0.4s ease",
        }}
      >
        <WelcomeSection />
        <TeamMembersSection />
      </main>
      <Footer />
    </>
  );
}
