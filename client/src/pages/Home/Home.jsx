import Navbar from "../../components/Navbar/Navbar";
import HomePage from '../../components/Home/Home'
import ParkingSection from '../../components/Home/ParkingSection'
import Carousel from '../../components/Home/Carousel'
import Hero from '../../components/Hero/Hero'
import MilestoneSection from '../../components/Home/MilestoneSection'
import CustomerTestimonials from "../../components/Testimonials/CustomerTestimonials"
import PromoCards from '../../components/PromoCards/PromoCards'
import InterestingReads from "../../components/InterestingReads/InterestingReads";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <HomePage/>
      <ParkingSection/>
      <Carousel/>
      <Hero/>
      <MilestoneSection/>
      {/* <CustomerTestimonials /> */}
      <PromoCards/>
      <InterestingReads/>
      <Footer />
    </>
  );
};

export default Home;