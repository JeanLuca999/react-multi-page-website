import { useEffect } from "react";
import BackgroundPage from "../components/BackgroundPage";
import BannerTitleInfo from "../components/BannerTitleInfo";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import TeamMembersSection from "../components/TeamMembersSection";

export default function Team() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BackgroundPage>
        <NavBar />
        <BannerTitleInfo title={"Our Team"} pathName={"team"} />
      </BackgroundPage>
      <main>
        <TeamMembersSection />
      </main>
      <Footer />
    </>
  );
}
