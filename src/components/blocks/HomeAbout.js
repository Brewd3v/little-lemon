import about1 from "../../assets/about-restaurant.jpg";
import about2 from "../../assets/about-mario-and-adrian.jpg";

export default function HomeAbout() {
  return (
    <div className="flex flex-wrap max-w-[860px] mx-auto px-2 pt-24 pb-60">
      <div className="w-full md:w-1/2">
        <div className="mb-4">
          <h1 className="mb-0 leading-none text-title">Little Lemon</h1>
          <p className="block leading-none text-subtitle text-primary-darkGray">
            Chicago
          </p>
        </div>
        <div>
          <p className="mb-6 text-justify text-p">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <p className="mb-6 text-justify text-p">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet sint. Velit officia consequat
            duis enim velit mollit.
          </p>
        </div>
      </div>
      <div className="relative hidden w-full md:w-1/2 md:block">
        <img
          className="absolute top-[5rem] right-10"
          src={about1}
          alt="mario and adrian"
        />
        <img
          className="absolute -right-10 -top-0"
          src={about2}
          alt="restaurant"
        />
      </div>
    </div>
  );
}
