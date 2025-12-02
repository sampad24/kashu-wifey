import ShowreelPage from "../components/ProjectsPage";
import Navbar from "../components/Navbar";
import FooterPage from "../components/FooterPage";

export const metadata = {
  title: "Showreel | Kashish Gupta – VFX Artist",
  description:
    "Watch the VFX showreel of Kashish Gupta showcasing high-quality Roto, Paint, Cleanup, Keying, and Compositing work for film and digital production.",
  keywords: [
    "VFX showreel",
    "roto showreel",
    "paint cleanup reel",
    "compositing reel",
    "VFX demo reel"
  ],
};


export default function Service() {
  return (
    <div className="">
      <Navbar></Navbar>
      <ShowreelPage />
      <div className="h-0.5  bg-gray-500 "></div>
      <FooterPage></FooterPage>
    </div>
  )
}
