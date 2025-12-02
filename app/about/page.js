import AboutPage from "../components/AboutPage";
import Navbar from "../components/Navbar";
import FooterPage from "../components/FooterPage";

export const metadata = {
  title: "About | Kashish Gupta – VFX Artist",
  description:
    "Learn more about Kashish Gupta, a passionate VFX artist with experience in Roto, Paint, Cleanup, and Compositing. Skilled in Nuke, Silhouette, and After Effects.",
  keywords: [
    "about VFX artist",
    "VFX portfolio",
    "roto paint artist bio",
    "compositing artist background"
  ],
};


export default function About() {
  return(
    <div>

        <Navbar></Navbar>
        <AboutPage />
        <div className="h-0.5  bg-gray-500 "></div>
        <FooterPage></FooterPage>
    </div> 
);
}
