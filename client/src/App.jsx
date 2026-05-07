import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";


import Home from "./pages/Home/Home";
import Business from "./pages/Business/Business";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Tech from "./pages/Tech/Tech";
import MallSavings from "./pages/Cards/MallSavings/MallSavings";
import HospitalGrowth from "./pages/Cards/HospitalGrowth/HospitalGrowth";
import AirportRevenue from "./pages/Cards/AirportRevenue/AirportRevenue";
import BusiKnowMore from "./pages/BusinessKnowMore/BusiKnowMore";
import Offices from "./pages/Cards/Offices/Offices";
import Temples from "./pages/Cards/Temples/Temples";
import Tourists from "./pages/Cards/Tourists/Tourists";
import Hospitals from "./pages/Cards/Hospitals/Hospitals";
import TechBusis from "./pages/Cards/TechBusis/TechBusis";
import Hotels from "./pages/Cards/Hotels/Hotels";
import Railways from "./pages/Cards/Railways/Railways";
import Parkings from "./pages/Parkings/Parkings";


function App() {
  return (
    <Router>
       <ScrollToTop />   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<Business />} />
        <Route path="/tech" element={<Tech />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mall-savings" element={<MallSavings />} />
        <Route path="/hospital-growth" element={<HospitalGrowth />} />
        <Route path="/airport-revenue" element={<AirportRevenue />} />
        <Route path="/business-know-more" element={<BusiKnowMore/>}/>
        <Route path="/office-parking" element={<Offices/>}/>
        <Route path="/temple-parking" element={<Temples/>}/>
        <Route path="/tourist-parking" element={<Tourists/>}/>
        <Route path="/hospital-parking" element={<Hospitals/>}/>
        <Route path="/tech-parking" element={<TechBusis/>}/>
        <Route path="/hotel-parking" element={<Hotels/>}/>
        <Route path="/railway" element={<Railways/>}/>
        <Route path="/rent-parking" element={<Parkings/>}/>
      </Routes>
    </Router>
  );
}

export default App;