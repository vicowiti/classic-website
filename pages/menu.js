import Image from "next/image";
import Link from "next/link";
import React from "react";
import HeroImg from "../public/assets/IMG-20221208-WA0017.jpg";

const Menu = () => {
  return (
    <div className="wrapper-new-hero">
      <section className="new-hero-container">
        <Image src={HeroImg} alt="hero image" className="new-hero-image" />
      </section>
      <section className="new-hero-text">
        <p>Your delicious meals delivered fast.</p>
        {/* <a href="https://wa.me/+254726678092">
          <button>Order Now</button>
        </a> */}
        <Link href="/menu">
          <button>See Menu</button>
        </Link>
      </section>
    </div>
  );
};

export default Menu;
