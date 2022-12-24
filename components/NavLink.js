import Link from "next/link";

const NavLink = ({ id, text, isResponsive, setIsResponsive }) => {
  function removeClass() {
    currentRef.current?.classList.toggle("responsive-nav");
  }
  return (
    <Link href={`#${id}`} onClick={() => setIsResponsive(!isResponsive)}>
      {text}
    </Link>
  );
};

export default NavLink;
