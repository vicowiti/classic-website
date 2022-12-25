import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPhone,
  FaMailBulk,
} from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import CallBackForm from "./CallBackForm";

const Footer = () => {
  return (
    <footer id="contact">
      <section>
        <div>
          <h3 className="footer-heading-major">Contact Us</h3>
        </div>
        <div>
          <a
            href="mailto:classiceventsanddeliveries@gmail.com"
            className="contact-flex"
          >
            <AiFillMail size={30} />
            <p>classiceventsanddeliveries@gmail.com</p>
          </a>
          <a href="tel:+254726678092" className="contact-flex">
            <FaPhone size={30} />
            <p>+254726678092</p>
          </a>
          <CallBackForm />
        </div>
      </section>
      <section className="socials-section">
        <div>
          <h3 className="footer-heading-major">Follow us on Social Media.</h3>
        </div>
        <div className="social-container">
          <a
            href="https://www.instagram.com/clasicevents"
            rel="noreferrer"
            target="_blank"
          >
            <FaInstagram size={40} />
          </a>
          <a
            href="https://twitter.com/ClasicEvents"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitter size={40} />
          </a>
          <a
            href="https://facebook.com/profile.php?id=100063182353295"
            rel="noreferrer"
            target="_blank"
          >
            <FaFacebook size={40} />
          </a>
        </div>
        <div>
          <h4>Copyright {new Date().getFullYear()}. All rights reserved.</h4>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
