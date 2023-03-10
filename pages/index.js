import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Hero from "../components/hero";
import Services from "../components/services";

import NewHero from "../components/newHero";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Classic Events</title>
        <meta name="description" content="Kenyan Events website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/assets/logo.jpg" />
      </Head>

      <NewHero />

      <Services />
    </>
  );
}
