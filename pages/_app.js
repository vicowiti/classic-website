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

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
