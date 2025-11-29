import ServicePage from "../components/ServicePage";
import Navbar from "../components/Navbar";
import FooterPage from "../components/FooterPage";

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
