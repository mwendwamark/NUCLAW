import React from "react";
import "./Testimonials.css";
import img from "../../../assets/HomeHero.jpg"; // Assuming you have a testimonial image

const Testimonials = () => {
  return (
    <section className="section home_testimonials section-container">
      <div className="home_testimonials-header">
        <span>Testimonials</span>
        <h2>What Our Clients Say</h2>
        <p>
          We provide comprehensive legal solutions including negotiations,
          mergers and acquisitions, family law, criminal defense, and personal
          injury.
        </p>
      </div>

      <div className="testimonials_container">
        <div className="testimonial_card">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>

          <div className="rating_and_image">
            <img src={img} alt="" />

            <div className="rating_section">
              <p>Tiana Donin</p>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        </div>

        <div className="testimonial_card">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>

          <div className="rating_and_image">
            <img src={img} alt="" />

            <div className="rating_section">
              <p>Tiana Donin</p>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        </div>
        <div className="testimonial_card">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>

          <div className="rating_and_image">
            <img src={img} alt="" />

            <div className="rating_section">
              <p>Tiana Donin</p>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        </div>

        <div className="testimonial_card">
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>

          <div className="rating_and_image">
            <img src={img} alt="" />

            <div className="rating_section">
              <p>Tiana Donin</p>
              <span>⭐⭐⭐⭐⭐</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
