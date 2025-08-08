import { useRef } from "react";
import "./Team.css";
import lawyersData from "../../../Data/LawyersData";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ArrowLeft, ArrowRight } from "lucide-react";

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import CTA from "../CTA/CTA";

const Team = () => {
  const swiperRef = useRef(null);

  return (
    <section className="section home_team section">
      <div className="home_team-container container">
        <div className="home_team-top">
          <div className="home_team-header">
            <span>The Team</span>
            <h2>Meet Our Lawyers</h2>
          </div>
          <div className="custom-navigation-buttons">
            <button className="swiper-nav-btn" onClick={() => swiperRef.current?.slidePrev()}>
              <ArrowLeft size={24} />
            </button>
            <button className="swiper-nav-btn" onClick={() => swiperRef.current?.slideNext()}>
              <ArrowRight size={24} />
            </button>
          </div>
        </div>

        <div className="swiper-container">
          <Swiper
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides={false}
            loop={true}
            speed={800}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              dynamicMainBullets: 3,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            breakpoints={{
              // Mobile devices
              320: {
                slidesPerView: 1,
                spaceBetween: 15,
              },
              // Small tablets
              500: {
                slidesPerView: 1.5,
                spaceBetween: 20,
                centeredSlides: true,
              },
              // Tablets
              768: {
                slidesPerView: 3,
                spaceBetween: 25,
                centeredSlides: false,
              },
              // Small laptops
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              // Large screens
              1200: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
              1400: {
                slidesPerView: 5,
                spaceBetween: 30,
              }
            }}
            className="team-swiper"
          >
            {lawyersData.map((lawyer) => (
              <SwiperSlide key={lawyer.id}>
                <div className="home_team-lawyer-card">
                  <img
                    src={lawyer.image}
                    alt={`${lawyer.name} - ${lawyer.specialization}`}
                    loading="lazy"
                  />
                  <div className="lawyer_details">
                    <h3>{lawyer.name}</h3>
                    <p className="specialization">{lawyer.specialization}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      <CTA/>
    </section>
  );
};

export default Team;