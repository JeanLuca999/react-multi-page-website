import BackgroundPage from "../components/BackgroundPage";
import HomeBannerInfo from "../components/HomeBannerInfo";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <BackgroundPage>
      <NavBar inHomePage={true} />
      <HomeBannerInfo />
    </BackgroundPage>
  );
}
