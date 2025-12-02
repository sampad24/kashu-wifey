import ServicePage from "../components/ServicePage";
import Navbar from "../components/Navbar";
import FooterPage from "../components/FooterPage";

export const metadata = {
  title: "VFX Services | Roto, Paint, Cleanup, Compositing",
  description:
    "Professional VFX services including Roto, Paint, Cleanup, Marker Removal, and Compositing. Skilled in Silhouette, Nuke, and After Effects for high-quality production work.",
  keywords: [
    "VFX services",
    "Roto service",
    "Paint cleanup",
    "wire removal",
    "dust cleanup",
    "compositing service",
    "marker removal",
    "green screen keying"
  ],
};


export default function Service() {
  return (
    <div>
      <Navbar></Navbar>
      <ServicePage />
      <div className="h-0.5  bg-gray-500 "></div>
      <FooterPage></FooterPage>
    </div>
  )
}
