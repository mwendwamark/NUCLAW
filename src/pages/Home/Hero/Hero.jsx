// import React from "react";
// import "./Hero.css";
// import HomeHeroImg from "../../../assets/HomeHero.jpg";
// import { ArrowDown } from "lucide-react";

// const Hero = () => {
//   return (
//     <>
//       <section className="home_hero-section">
//         <div className="home_hero-container below-navbar container">
//           <div className="home_hero-title section">
//             <h1>Nuclear Law Policy, Advocacy & Expertise</h1>
//             <span>
//               We are an African-led research institute dedicated to advancing
//               nuclear law and policy
//             </span>
//             <p>
//               Welcome to the Nuclaw Research Initiative, the first institution
//               of its kind in Kenya and Africa dedicated exclusively to nuclear
//               energy law and policy. We serve as a hub for legal scholarship,
//               policy dialogue and advancing robust regulatory frameworks
//             </p>

//             <div className="home_hero-buttons">
//               <button className="btn btn-white">Free consultations</button>
//               <a href="#">
//                 {" "}
//                 Start exploring <ArrowDown />
//               </a>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Hero;


import React from "react";
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