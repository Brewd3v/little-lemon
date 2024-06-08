import logo from "../assets/logo.png";
import HamburgerIcon from "../components/icons/Hamburger";
import BasketIcon from "../components/icons/Basket";
import Nav from "./Nav";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="md:flex hidden max-w-[860px] mx-auto items-center justify-between py-6 px-2">
        <Link to="/">
          <img src={logo} alt="little lemon" height={50} width={184} />
        </Link>
        <Nav />
      </header>
      <header className="flex items-center justify-between px-4 py-4 md:hidden">
        <HamburgerIcon className="h-[25px] text-primary-darkGray" />
        <img src={logo} alt="little lemon logo" height={40} width={147.5} />
        <BasketIcon className="text-primary-green h-[44px] w-auto" />
      </header>
    </>
  );
}
