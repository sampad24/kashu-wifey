
import Image from "next/image";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import FooterPage from "./components/FooterPage";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import ProjectsPage from "./components/ProjectsPage";
import SkillPage from "./components/SkillPage";
import LoadingScreen from "./components/LoadingScreen";
import ServicePage from "./components/ServicePage2";

export default function Home() {

  return (
    <div>
      <div className="">
        <LoadingScreen></LoadingScreen>
      </div>

      <Navbar></Navbar>
      <HomePage></HomePage>
      <div className="h-0.5  bg-gray-500 "></div>
      <ServicePage></ServicePage>
      <div className="h-0.5  bg-gray-500 "></div>
      <FooterPage></FooterPage>
    </div>
  );
}
