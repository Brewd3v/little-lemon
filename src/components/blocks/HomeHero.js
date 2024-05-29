import heroImage from "../../assets/restauranfood.jpg";

export default function HomeHero() {
  return (
    <div className="bg-primary-green">
      <div className="max-w-[860px] mx-auto px-2 py-12 flex flex-wrap">
        <div className="w-full md:w-1/2">
          <div className="mb-4">
            <h1 className="mb-0 leading-none text-title text-primary-yellow">
              Little Lemon
            </h1>
            <p className="block !font-light leading-none text-white text-subtitle">
              Chicago
            </p>
          </div>
          <div>
            <p className="mb-6 text-primary-lightGray text-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button
              type="button"
              className="inline-block w-full max-w-xs px-4 py-3 text-center duration-150 text-lead bg-primary-yellow hover:bg-primary-coral rounded-2xl"
            >
              Reserve a table
            </button>
          </div>
        </div>
        <div className="relative w-full mt-6 md:mt-0 md:w-1/2">
          <img
            className="right-0 hidden md:block md:absolute rounded-2xl"
            src={heroImage}
            alt="food"
            width={329}
            height={351}
          />
        </div>
      </div>
    </div>
  );
}
