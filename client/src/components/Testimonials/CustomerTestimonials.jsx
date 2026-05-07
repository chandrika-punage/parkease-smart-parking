import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./CustomerTestimonials.css";

import review1 from "../../assets/testimonials/Review1.png";
import review2 from "../../assets/testimonials/Review2.png";
import review3 from "../../assets/testimonials/Review3.png";

const testimonials = [
  { id: 1, image: review1 },
  { id: 2, image: review2 },
  { id: 3, image: review3 },
];

const CustomerTestimonials = () => {
  return (
    <section className="testimonial-section">
      <div className="testimonial-container">

        {/* LEFT SIDE */}
        <div className="testimonial-left">
          <h2>Customer Says</h2>
          <div className="left-line"></div>
        </div>

        {/* RIGHT SIDE SLIDER */}
        <div className="testimonial-right">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={21}
            slidesPerView={2}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
            }}
          >
            {testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="testimonial-card">
                  <img src={item.image} alt="Customer Review" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default CustomerTestimonials;