import BackgroundPage from "../components/BackgroundPage";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <BackgroundPage>
      <NavBar inHomePage={true} />
    </BackgroundPage>
  );
}
