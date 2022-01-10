import { useEffect } from "react";
import BackgroundPage from "../components/BackgroundPage";
import BannerTitleInfo from "../components/BannerTitleInfo";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import TeamMembersSection from "../components/TeamMembersSection";
import { useTheme } from "../context/Theme";

export default function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { theme } = useTheme();

  return (
    <>
      <BackgroundPage>
        <NavBar />
        <BannerTitleInfo title={"Our Team"} pathName={"team"} />
      </BackgroundPage>
      <main
        style={{
          backgroundColor: theme.backgroundColor,
          transition: "all 0.4s ease",
        }}
      >
        <TeamMembersSection />
      </main>
      <Footer />
    </>
  );
}
