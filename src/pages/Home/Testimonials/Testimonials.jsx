import React from "react";
import "./Testimonials.css";
import img from "../../../assets/HomeHero.jpg"; // Assuming you have a testimonial image
import testimonialsData from "../../../Data/Teestimonials"; // Adjust the path as necessary

const Testimonials = () => {
  return (
    <section className="section home_testimonials ">
      <div className="home_testimonials-container section-container">
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
          {testimonialsData.map((testimonial) => (
            <div className="testimonial_card" key={testimonial.id}>
              <p>{testimonial.text}</p>

              <div className="rating_and_image">
                <img src={testimonial.image} alt={testimonial.author} />

                <div className="rating_section">
                  <p>{testimonial.author}</p>
                  <span>{"⭐".repeat(testimonial.rating)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
