import Navbar from "../../components/Navbar/Navbar";
import ContactSection from '../../components/Contact/ContactSection'
import ContactHighlights from '../../components/Contact/ContactHighlights'
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactSection/>
      <ContactHighlights/>
      <Footer />
    </>
  );
};

export default Contact;