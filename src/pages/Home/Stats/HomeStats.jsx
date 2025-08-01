import React from "react";
import "./HomeStats.css";
import { NavLink } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HomeStats = () => {
  return (
    <>
      <section className="home_stats section-container section">
        <div className="home_stat-item">
          <span>01</span>
          <h2>Experienced court Performance</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            minima numquam obcaecati id est quam tenetur alias tempora.
          </p>
          <NavLink to="/about" className="learn-more-link">
            {" "}
            Learn More <ArrowRight />
          </NavLink>
        </div>
        <div className="home_stat-item">
          <span>02</span>
          <h2>Skilled Legal Strategy</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            minima numquam obcaecati id est quam tenetur alias tempora.
          </p>
          <NavLink to="/about" className="learn-more-link">
            {" "}
            Learn More <ArrowRight />
          </NavLink>
        </div>
        <div className="home_stat-item">
          <span>03</span>
          <h2>Client-Focused Advocacy</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
            minima numquam obcaecati id est quam tenetur alias tempora.
          </p>
          <NavLink to="/about" className="learn-more-link">
            {" "}
            Learn More <ArrowRight />
          </NavLink>
        </div>
      </section>
    </>
  );
};

export default HomeStats;