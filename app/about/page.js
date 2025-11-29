import AboutPage from "../components/AboutPage";
import Navbar from "../components/Navbar";
import FooterPage from "../components/FooterPage";

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
