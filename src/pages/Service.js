import BackgroundPage from "../components/BackgroundPage";
import CardSection from "../components/CardSection";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

export default function Service() {
  return (
    <>
      <BackgroundPage>
        <NavBar />
      </BackgroundPage>
      <main>
        <CardSection />
      </main>
      <Footer />
    </>
  );
}
