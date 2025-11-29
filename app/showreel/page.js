import ShowreelPage from "../components/ProjectsPage";
import Navbar from "../components/Navbar";
import FooterPage from "../components/FooterPage";

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
