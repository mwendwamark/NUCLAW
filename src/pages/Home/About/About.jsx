import React from "react";
import "./About.css";
import { NavLink } from "react-router-dom";
import img from "../../../assets/HomeHero.jpg";
import { ArrowDownRight } from "lucide-react";
import Values from "../Values/Values";

const About = () => {
  return (
    <>
      <section className="h_about-section section">
        <div className="home_about-section container">
          <div className="home_about-left">
            <span>Who We Are</span>
            <h2>We earn your trust and are diligent in your case</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              totam labore repellendus vitae, qui sequi praesentium odio magni.
            </p>
            <NavLink
              to="/about"
              className="home_about-learn-more btn btn_primary"
            >
              Learn More
            </NavLink>

            <div className="home_about-brief">
              <div className="home_about-brief-item">
                <p>Domestic Law</p>
                <ArrowDownRight color="#9b936b" />
              </div>
              <div className="home_about-brief-item">
                <p>Nuclear Law</p>
                <ArrowDownRight color="#9b936b" />
              </div>
              <div className="home_about-brief-item">
                <p>Criminal Law</p>
                <ArrowDownRight color="#9b936b" />
              </div>
              <div className="home_about-brief-item">
                <p>Property Law</p>
                <ArrowDownRight color="#9b936b" />
              </div>
            </div>
          </div>
          <div className="home_about-right">
            <div className="home_about-img">
              <img src={img} alt="About Us" />
            </div>
          </div>
        </div>
        <Values/>
      </section>
    </>
  );
  
};

export default About;