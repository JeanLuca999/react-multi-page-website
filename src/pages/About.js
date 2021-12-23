import { useEffect } from "react/cjs/react.development";
import BackgroundPage from "../components/BackgroundPage";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import TeamMembersSection from "../components/TeamMembersSection";
import WelcomeSection from "../components/WelcomeSection";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BackgroundPage>
        <NavBar />
      </BackgroundPage>
      <main>
        <WelcomeSection />
        <TeamMembersSection />
      </main>
      <Footer />
    </>
  );
}
