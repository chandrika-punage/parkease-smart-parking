import React from "react";
import "./ClientCarousel.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// import your logos from assets
import logo1 from "../../assets/business/logo1.png";
import logo2 from "../../assets/business/logo2.png";
import logo3 from "../../assets/business/logo3.png";
import logo4 from "../../assets/business/logo4.png";
import logo5 from "../../assets/business/logo5.png";
import logo6 from "../../assets/business/logo6.png";
import logo7 from "../../assets/business/logo7.png";
import logo8 from "../../assets/business/logo8.png";
import logo9 from "../../assets/business/logo9.png";
import logo10 from "../../assets/business/logo10.png";


const logos = [logo1, logo2, logo3, logo4, logo5,logo6,logo7,logo8,logo9,logo10];

const ClientCarousel = () => {
  return (
    <section className="client-section">

      {/* TOP LINE */}
      <div className="line"></div>

      <div className="client-container">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={80}
          slidesPerView={4}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={900}
          breakpoints={{
            0: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {logos.map((logo, index) => (
            <SwiperSlide key={index}>
              <div className="logo-box">
                <img src={logo} alt="Client Logo" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* BOTTOM LINE */}
      <div className="line"></div>

    </section>
  );
};

export default ClientCarousel;