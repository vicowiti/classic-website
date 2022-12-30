import Image from "next/image";
import React from "react";
import HeroImg from "../public/assets/delivery.webp";

const NewHero = () => {
  return (
    <div className="wrapper-new-hero">
      <section className="new-hero-container">
        <Image src={HeroImg} alt="hero image" className="new-hero-image" />
      </section>
      <section className="new-hero-text">
        <p>Your delicious meals delivered fast.</p>
        <a href="https://wa.me/+254726678092">
          <button>Order Now</button>
        </a>
      </section>
    </div>
  );
};

export default NewHero;
