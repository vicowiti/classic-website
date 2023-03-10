import Image from "next/image";
import Link from "next/link";
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

        <Link href="/menu">
          <button>See Menu</button>
        </Link>
      </section>
    </div>
  );
};

export default NewHero;
