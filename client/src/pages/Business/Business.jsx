import Navbar from "../../components/Navbar/Navbar";
import BusinessHero from '../../components/Business/BusinessHero'
import GrowWith from '../../components/Business/GrowWith'
import BusinessCases from '../../components/Business/BusinessCases'
import OurPresence from '../../components/Business/OurPresence'
import ClientCarousel from '../../components/Business/ClientCarousel'
import FeaturesSection from '../../components/Business/FeaturesSection'
import Dashboard from '../../components/Business/Dashboard'
import DashboardSection from '../../components/Business/DashboardSection'
import BusinessSection from '../../components/Business/BusinessSection'
import UsabilitySection from '../../components/Business/UsabilitySection'
import Footer from "../../components/Footer/Footer";

const Business = () => {
  return (
    <>
      <Navbar />

      <BusinessHero/>
      <GrowWith/>
      <BusinessCases/>
      <OurPresence/>
      <ClientCarousel/>
      <FeaturesSection/>
      <Dashboard/>
      <DashboardSection />
      <BusinessSection/>
      <UsabilitySection/>
      
      <Footer />
    </>
  );
};

export default Business;