import { Helmet } from "react-helmet-async";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Rayhan Sohel</title>
      </Helmet>
      <div>
          <HeroSection/>
          <AboutSection/>
          <SkillsSection/>
          <ProjectsSection/>
          <ContactSection/>
      </div>
    </div>
  );
};

export default Home;
