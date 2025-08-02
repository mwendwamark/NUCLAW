import "./Hero.css";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <>
      <section className="hero-section">
        <div className="hero-content container">
          <div className="hero-text-container">
            <h1>We achieve a result that is right for you</h1>
            <p className="hero-subtitle">
              Smart approaches to legal solution with exceptional service. Legal
              talent and expertise necessary to meet our clients' needs in an
              ever-changing and fast-paced environment.
            </p>

            <div className="hero-buttons">
              <button className="btn btn-white">Free Consultation</button>
              <a href="#" className="start-exploring-link">
                {" "}
                Start Exploring <ArrowDown />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;