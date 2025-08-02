import React from "react";
import { Check } from "lucide-react";
import img from "../../../assets/HomeHero.jpg";
import "./Values.css";


const Values = () => {
  return (
    <section className="home_values section ">
      <div className="home_values-container container">
        <div className="home_values-left">
          <img 
            src={img}
            alt="Legal consultation" 
            className="protruding-image"
          />
        </div>

        <div className="home_values-right">
          <div className="home_values-content">
            <h2>
              Our lawyers provide <span className="golden">customer centric</span> advice to corporations
            </h2>
            <p>
              In today's complex and ever-changing legal landscape, having a trusted legal advisor by your side can make all the difference.
            </p>
            <ul className="home_values-list">
              <li>
                <Check size={20} color="#9b936b" />
                Insurance Claims
              </li>
              <li>
                <Check size={20} color="#9b936b" />
                Business Consulting
              </li>
              <li>
                <Check size={20} color="#9b936b" />
                Contract Analysis
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;