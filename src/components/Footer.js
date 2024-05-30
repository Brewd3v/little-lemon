import LittleLemonSVG from "./LittleLemonSVG";

export default function Footer() {
  return (
    <footer className="py-12 bg-primary-pink">
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4 max-w-[860px] px-2 mx-auto">
        <div className="">
          <LittleLemonSVG />
        </div>
        <div>
          <h2 className="mb-2 text-cardtitle text-primary-green">Navigation</h2>
          <ul className="space-y-2 text-p">
            <li>Home</li>
            <li>About</li>
            <li>Menu</li>
            <li>Reservations</li>
            <li>Order Online</li>
            <li>Login</li>
          </ul>
        </div>
        <div>
          <h2 className="mb-2 text-cardtitle text-primary-green">Contact</h2>
          <ul className="space-y-2 text-p">
            <li>
              7 Archer St, <br /> London W1D 7AU
            </li>
            <li>+44 (0)20 7287 5555</li>
            <li>hello@littlelemon.com</li>
          </ul>
        </div>
        <div>
          <h2 className="text-cardtitle text-primary-green">Socials</h2>
        </div>
      </div>
    </footer>
  );
}
