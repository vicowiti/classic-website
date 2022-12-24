import React from "react";
import Logo from "../public/assets/logo.jpg";
import Image from "next/image";
import NavLink from "./NavLink";
import { useState } from "react";

const NavBar = () => {
  const [isResponsive, setIsResponsive] = useState(false);

  const showNavbar = () => {
    setIsResponsive(!isResponsive);
  };
  return (
    <header className="app">
      <section className="logo-section">
        <Image
          src={Logo}
          //   width="50px"
          //   height="50px"
          // height="auto"
          className="logo"
          alt="logo"
        />
      </section>

      <nav className={isResponsive ? "responsive-nav" : ""}>
        <NavLink
          id="hero"
          text="Home"
          isResponsive={isResponsive}
          setIsResponsive={setIsResponsive}
        />
        <NavLink
          id="shop"
          text="Shop"
          isResponsive={isResponsive}
          setIsResponsive={setIsResponsive}
        />
        <NavLink
          id="about"
          text="About"
          isResponsive={isResponsive}
          setIsResponsive={setIsResponsive}
        />
        <NavLink
          id="contact"
          text="Contact"
          isResponsive={isResponsive}
          setIsResponsive={setIsResponsive}
        />

        <button onClick={showNavbar} className="nav-btn nav-close-btn">
          X
        </button>
      </nav>
      <button onClick={showNavbar} className="nav-btn">
        \\\
      </button>
    </header>
  );
};

export default NavBar;
