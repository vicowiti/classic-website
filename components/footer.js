import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPhone,
  FaMailBulk,
} from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <section>
        <div>
          <h3 className="footer-heading-major">Contact Us</h3>
        </div>
        <div>
          <div className="contact-flex">
            <AiFillMail size={30} />
            <p>placeholder@gmail.com</p>
          </div>
          <div className="contact-flex">
            <FaPhone size={30} />
            <p>+254712345678</p>
          </div>
          <form className="footer-form">
            <h3 className="footer-heading-minor">Request a callback.</h3>
            <div>
              <input
                className="footer-input"
                type="text"
                placeholder="Full Name"
              />
            </div>

            <div>
              <input
                className="footer-input"
                type="email"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                className="footer-input"
                type="number"
                placeholder="Phone number"
              />
            </div>

            <button className="footer-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </section>
      <section className="socials-section">
        <div>
          <h3 className="footer-heading-major">Follow us on Social Media.</h3>
        </div>
        <div className="social-container">
          <a href="" target="_blank">
            <FaInstagram size={40} />
          </a>
          <a href="" target="_blank">
            <FaTwitter size={40} />
          </a>
          <a href="" target="_blank">
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
