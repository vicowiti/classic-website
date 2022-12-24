import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header>
      <nav>
        <Image href="" alt="" />
        <Link href="/">Home</Link>
        <Link href="/services">Services</Link>
        <Link href="/">About Us</Link>
      </nav>
    </header>
  );
};

export default Navbar;
