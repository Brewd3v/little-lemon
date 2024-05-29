import { Outlet } from "react-router-dom";
import Header from "./Header";

export default function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
            share across all the pages on your site, like navigation. */}
      <Header />
      {/* An <Outlet> renders whatever child route is currently active,
            so you can think about this <Outlet> as a placeholder for
            the child routes we defined above. */}
      <>
        <h1 className="text-title">Display Title - Medium 64pt</h1>
        <h2 className="text-subtitle">
          Sub title - keep close to display Regular 40pt
        </h2>
        <p className="text-lead">
          Lead text! Use this for descriptive items to catch attention! e.g.
          home page or CTA (Call to action) Medium 18pt
        </p>
        <h3 className="text-sectiontitle">
          SECTION TITLE! UPPERCASE 20pt EXTRA BOLD
        </h3>
        <span className="block text-sectioncategories">
          This weeks specials! Section categories 16pt Extra Bold
        </span>
        <h3 className="text-cardtitle">Card Title 18pt Bold</h3>
        <p className="text-p">
          Paragraph text regular 16pt 1.5 line height Max 65 characters per
          line.
        </p>
        <p className="text-highlighted">Highlight text e.g. price medium 16pt</p>
      </>

      <Outlet />
    </div>
  );
}
