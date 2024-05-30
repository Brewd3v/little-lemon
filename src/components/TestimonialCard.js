import ReviewStars from "./ReviewStars";

export default function TestimonialCard({ fullname, tag, text }) {
  return (
    <div className="p-5 bg-white shadow-md rounded-2xl">
      <div className="flex gap-2 mt-2 mb-4 text-primary-coral">
        <ReviewStars />
      </div>
      <div className="flex items-start gap-2 mb-3">
        <div className="w-10 h-10 rounded-full bg-primary-lightGray"></div>
        <div>
          <h4 className="mb-0 text-highlighted text-primary-darkGray">
            {fullname}
          </h4>
          <p className="text-p text-[#6E6F6E]">{tag}</p>
        </div>
      </div>
      <div className="text-p">
        {"“"}{text}{"”"}
      </div>
    </div>
  );
}
