import "../styles/globals.css";
import "../styles/NavBar.css";
import "../styles/Hero.css";
import "../styles/Footer.css";
import "../styles/Service.css";
import "../styles/Services.css";
import "../styles/NewHero.css";
import "../styles/Menu.css";
import NavBar from "../components/navbar";
import Footer from "../components/footer";
import Script from "next/script"

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
    <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2993150059930953"
     crossOrigin="anonymous" />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
