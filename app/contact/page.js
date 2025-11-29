import ContactPage from "../components/ContactPage";
import FooterPage from "../components/FooterPage";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div>
      <Navbar></Navbar>
      <ContactPage />
      <div className="h-0.5  bg-gray-500 "></div>
      <FooterPage></FooterPage>
    </div>
  );
}
