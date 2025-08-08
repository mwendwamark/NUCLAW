import React from "react";
import "./CTA.css";
import { NavLink } from "react-router-dom";
import img from "../../../assets/HomeHero.jpg";

const CTA = () => {
  return (
    <section className="home_CTA section">
      <div className="home_CTA-container container">
        <div className="home_CTA-left">
          <img
            src={img}
            alt="Legal consultation"
            className="protruding-image-2"
          />
        </div>

        <div className="home_CTA-right">
          <div className="home_CTA-content">
            <div className="CTA_header">
              <span>Let's get in touch</span>
              <h2>We will solve your problems today</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
                consectetur voluptatibus dolore dolorum sed numquam! Eveniet non
                labore facilis?
              </p>
            </div>

            <div className="CTA_buttons">
              <NavLink to="/services" className="btn btn_primary">
                Our services
              </NavLink>
              <NavLink to="/contact" className="btn btn_outline">
                Contact Us
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;