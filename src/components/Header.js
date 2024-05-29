import logo from "../assets/logo.png";
import HamburgerIcon from "../components/icons/Hamburger";
import BasketIcon from "../components/icons/Basket";
import Nav from "./Nav";

export default function Header() {
  return (
    <>
      <header className="flex max-w-[860px] mx-auto items-center justify-between py-6">
        <img src={logo} alt="little lemon logo" height={50} width={184} />
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
