import Navbar from "../../components/Navbar/Navbar";
import AboutSection from '../../components/About/AboutSection'
import WelcomeSection from '../../components/About/WelcomeSection'
import AboutHighlightsSection from '../../components/About/AboutHighlightsSection'
import AboutContactSection from '../../components/About/AboutContactSection'
import Footer from "../../components/Footer/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <AboutSection/>
      <WelcomeSection/>
      <AboutHighlightsSection/>
      <AboutContactSection/>
      <Footer />
    </>
  );
};

export default About;