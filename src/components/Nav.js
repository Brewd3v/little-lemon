import { Link } from "react-router-dom";

export default function Nav() {
  const links = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/",
    },
    {
      title: "Menu",
      url: "/",
    },
    {
      title: "Reservations",
      url: "/reservations",
    },
    {
      title: "Order Online",
      url: "/",
    },
    {
      title: "Login",
      url: "/",
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
