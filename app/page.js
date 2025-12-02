
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

export const metadata = {
  title: "Kashish Gupta | VFX Artist • Roto • Paint • Compositor",
  description:
    "Professional VFX Artist specializing in Roto, Paint, Keying, Cleanup, Tracking, and Compositing. Portfolio showcasing high-quality visual effects work using Nuke, Silhouette, and After Effects.",
  keywords: [
    "VFX Artist",
    "Roto Artist",
    "Paint Artist",
    "Compositor",
    "Clean Plate Artist",
    "VFX Portfolio",
    "Nuke Artist",
    "Silhouette Artist",
    "After Effects Artist",
    "Visual Effects Freelancer"
  ],
  openGraph: {
    title: " Kashish Gupta | Professional VFX Artist",
    description:
      "Portfolio showcasing professional Roto, Paint, Cleanup, Tracking, and Compositing work.",
    url: "",
    siteName: "vfx portfolio",
    type: "website"
  },
};


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
