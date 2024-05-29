import { Link } from "react-router-dom";

export default function Nav() {
  const links = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Menu",
      url: "/menu",
    },
    {
      title: "Reservations",
      url: "/reservations",
    },
    {
      title: "Order Online",
      url: "/order-online",
    },
    {
      title: "Login",
      url: "/login",
    },
  ];

  return (
    <nav>
      <ul className="flex gap-6 text-cardtitle">
        {links &&
          links.map((link) => (
            <li key={link.url}>
              <Link to={link.url}>{link.title}</Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}
