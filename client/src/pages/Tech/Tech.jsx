import Navbar from "../../components/Navbar/Navbar";
import OurTech from '../../components/Tech/OurTech';
import TechFeatures from '../../components/Tech/TechFeatures'
import TechArchitecture from '../../components/Tech/TechArchitecture'
import LoadDistribution from '../../components/Tech/LoadDistribution'
import Services from '../../components/Tech/Services'
import SystemsAgility from '../../components/Tech/SystemsAgility'
import SystemsAgilitySection from '../../components/Tech/SystemsAgilitySection'
import ParkingComparison from '../../components/Tech/ParkingComparison'
import Footer from "../../components/Footer/Footer";

const Tech = () => {
  return (
    <>
      <Navbar />
      <OurTech/>
      <TechFeatures/>
      <TechArchitecture/>
      <LoadDistribution/>
      <Services/>
      <SystemsAgilitySection/>
      <SystemsAgility/>
      <ParkingComparison/>
      
      <Footer />
    </>
  );
};

export default Tech;