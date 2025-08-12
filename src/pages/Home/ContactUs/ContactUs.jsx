import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="section home_contact-us">
      <div className="home_contact-us-container container">
        <div className="home_contact-us-left">
          <span>Let's get in touch</span>
          <h2>Book a consultation with us</h2>
          <div className="home_contact-us-description">
            <p>
              To find out more about our services, please fill out the form
              below.
              <br />
              Our friendly team will get back to you as soon as possible.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Totam ratione beatae velit adipisci, reprehenderit magnam
              obcaecati.
            </p>
          </div>
        </div>
        <div className="home_contact-us-right">
          <form>
            <div className="form_full-name">
              <input
                type="text"
                id="first-name"
                name="first-name"
                required
                placeholder="First Name"
              />

              <input
                type="text"
                id="last-name"
                name="last-name"
                required
                placeholder="Last Name"
              />
            </div>
            <div className="form_contacts">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email"
              />

              <input
                type="text"
                id="phone"
                name="phone"
                required
                placeholder="Phone"
              />
            </div>

            <select id="service" name="service" required>
              <option value="">Select a service</option>
              <option value="consultation">Consultation</option>
              <option value="development">Development</option>
              <option value="design">Design</option>
            </select>

            <textarea
              id="message"
              name="message"
              rows="4"
              required
              placeholder="Message"
            ></textarea>

            <button type="submit" className="btn btn_golden">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
