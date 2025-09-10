import React from "react";
import "./Footer.css";
import worldMap from "../../assets/world.svg"; // path to your SVG
import { LocateFixedIcon, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-overlay" style={{ backgroundImage: `url(${worldMap})` }}></div>

      <div className="footer-content container">
        <h2 className="footer-title">NUCLAW®</h2>

        <div className="footer-items">
          <div className="footer-item">
            <Phone/>
            <p>(704) 555-0127</p>
          </div>

          <div className="footer-item">
            <LocateFixedIcon/>
            <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
          </div>

          <div className="footer-item">
            <Mail/>
            <p>lawyer@example.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
