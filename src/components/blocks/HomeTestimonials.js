import TestimonialCard from "../TestimonialCard";

export default function HomeTestimonials() {
  const testimonials = [
    {
      fullname: "Sara Lopez",
      tag: "Sara72",
      text: "Seriously cannot stop thinking about the Turkish Mac n’ Cheese!!",
    },
    {
      fullname: "Jon Do",
      tag: "Johnny_Utah",
      text: "We had such a great time celebrating my grandmothers bitthday!",
    },
    {
      fullname: "Shaun Sandwich",
      tag: "Sandwich 42",
      text: "Such a chilled out atmosphere - love it!",
    },
  ];

  return (
    <section className="py-12 bg-primary-lightGray">
      <h2 className="pb-6 text-center text-title">Testimonials</h2>
      <div className="max-w-[860px] px-2 mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {testimonials &&
          testimonials.map((item) => (
            <TestimonialCard
              key={item.tag}
              fullname={item.fullname}
              tag={item.tag}
              text={item.text}
            />
          ))}
      </div>
    </section>
  );
}
