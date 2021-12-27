import { useEffect } from "react";
import { useContext } from "react/cjs/react.development";
import BackgroundPage from "../components/BackgroundPage";
import BannerTitleInfo from "../components/BannerTitleInfo";
import Footer from "../components/Footer";
import { GlobalContext } from "../components/GlobalContext";
import NavBar from "../components/NavBar";
import TeamMembersSection from "../components/TeamMembersSection";

export default function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { theme } = useContext(GlobalContext);

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
