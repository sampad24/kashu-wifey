import SkillPage from "../components/SkillPage";
import Navbar from "../components/Navbar";
import FooterPage from "../components/FooterPage";

export default function Skill() {

  return (
    <div>
      <Navbar></Navbar>
      <SkillPage />
      <div className="h-0.5  bg-gray-500 "></div>
      <FooterPage></FooterPage>
    </div>

  );

}
