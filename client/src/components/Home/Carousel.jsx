import React from "react";
import "./Carousel.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

// Import your card images
import img1 from "../../assets/home/locals/1.png";
import img2 from "../../assets/home/locals/2.png";
import img3 from "../../assets/home/locals/3.png";
import img4 from "../../assets/home/locals/4.png";
import img5 from "../../assets/home/locals/5.png";

const Carousel = () => {
  return (
    <section className="carousel-section">
      <div className="carousel-container">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={3}
          spaceBetween={40}
          loop={true}
          speed={900}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
        >
          <SwiperSlide>
            <div className="cardd">
              <img src={img1} alt="Parking 1" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="cardd">
              <img src={img2} alt="Parking 2" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="cardd">
              <img src={img3} alt="Parking 3" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="cardd">
              <img src={img4} alt="Parking 4" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="cardd">
              <img src={img5} alt="Parking 5" />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Carousel;