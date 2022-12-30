import React from "react";
import Logo from "../public/assets/logo.jpg";
import Image from "next/image";
import NavLink from "./NavLink";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import Link from "next/link";
import { useEffect } from "react";

const NavBar = () => {
  const [isResponsive, setIsResponsive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  console.log(isScrolled);

  useEffect(() => {
    function changePosition() {
      if (window.scrollY > 200) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", changePosition);
  }, [isScrolled]);

  const showNavbar = () => {
    setIsResponsive(!isResponsive);
  };
  return (
    <header
      className="app"
      style={{ position: isScrolled ? "relative" : "fixed" }}
    >
      <section className="logo-section">
        <Link href="/">
          <Image
            src={Logo}
            //   width="50px"
            //   height="50px"
            // height="auto"
            className="logo"
            alt="logo"
          />
        </Link>
      </section>

      <nav className={isResponsive ? "responsive-nav" : ""}>
        <NavLink
          id="/"
          text="Home"
          isResponsive={isResponsive}
          setIsResponsive={setIsResponsive}
        />
        {/* <NavLink
          id="shop"
          text="Shop"
          isResponsive={isResponsive}
          setIsResponsive={setIsResponsive}
        /> */}
        <NavLink
          id="services"
          text="Services"
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
          <FaTimes />
        </button>
      </nav>
      <button onClick={showNavbar} className="nav-btn">
        <FaBars />
      </button>
    </header>
  );
};

export default NavBar;
