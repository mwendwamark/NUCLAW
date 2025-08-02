import "./HomeSuccess.css";
import { NavLink } from "react-router-dom";
import img from "../../../assets/HomeHero.jpg"; // Replace with the actual image path
import img2 from "../../../assets/HomeSuccess.jpg"; // Replace with the actual image path
import { ArrowRight } from "lucide-react";
const HomeSuccess = () => {
  return (
    <>
      <section className="home_success-section section">
        <div className="home_success-container container">
          <div className="home_success-top">
            <span>Our Cases</span>
            <h2>We have a proven track record of success</h2>
            <div className="success_paragraph">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed,
                incidunt labore. Quae nihil praesentium sequi iste eos!
              </p>
              <NavLink to="/about" className="btn btn_outline">
                read more{" "} <ArrowRight size={16} style={{marginLeft: "12px"}} />
              </NavLink>
            </div>
          </div>

          <div className="home_success-bottom">
            <div className="home_success-card">
              <div className="home_success-img">
                <img src={img} alt="" />
              </div>

              <div className="home_success-card-contents">
                <span>
                  Corporate <b>.</b> Finance <b>.</b> Tax
                </span>
                <h3>Inadequate credit reporting alone does not container</h3>
                <NavLink to="/about" className="learn-more-link">
                  {" "}
                  Learn More <ArrowRight />
                </NavLink>
              </div>
            </div>

            <div className="home_success-card">
              <div className="home_success-img">
                <img src={img2} alt="" />
              </div>

              <div className="home_success-card-contents">
                <span>
                  Corporate <b>.</b> Finance <b>.</b> Tax
                </span>
                <h3>Inadequate credit reporting alone does not container</h3>
                <NavLink to="/about" className="learn-more-link">
                  {" "}
                  Learn More <ArrowRight />
                </NavLink>
              </div>
            </div>

            <div className="home_success-card">
              <div className="home_success-img">
                <img src={img} alt="" />
              </div>

              <div className="home_success-card-contents">
                <span>
                  Intellectual Property <b>.</b> Litigation
                </span>
                <h3>Inadequate credit reporting alone does not container</h3>
                <NavLink to="/about" className="learn-more-link">
                  {" "}
                  Learn More <ArrowRight />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSuccess;
