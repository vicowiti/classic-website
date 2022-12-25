import Image from "next/image";
import React from "react";
import HeroImg from "../public/assets/IMG-20221208-WA0028.jpg";

const Hero = () => {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="hero-image-wrapper">
          <Image src={HeroImg} alt="hero image" priority />
        </div>
        <article className="hero-text-wrapper">
          <div>
            <h2 className="grad-text">Welcome</h2>
            <h2 className="grad-text">To Classic Events</h2>
            <p>Quality catering services for your intimate occasions</p>
          </div>

          <button className="call-to-action">Contact Us</button>
        </article>
      </section>
    </div>
  );
};

export default Hero;
