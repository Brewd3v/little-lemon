import BikeIcon from "./icons/Bike";

export default function FoodCard({ img, amount, title, text }) {
  return (
    <div className="flex flex-col h-full">
      <img className="rounded-t-2xl" src={img} alt={title} />
      <div className="flex flex-col justify-between flex-1 p-4 bg-primary-lightGray">
        <div>
          <div className="flex items-center justify-between">
            <h3 className="text-cardtitle">{title}</h3>
            <p className="text-p text-primary-coral">${amount.toFixed(2)}</p>
          </div>
          <p className="text-p">{text}</p>
        </div>
        <button
          type="button"
          className="flex items-center gap-2 mt-2 text-highlighted text-primary-darkGray"
        >
          <span>Order a delivery</span>
          <BikeIcon />
        </button>
      </div>
    </div>
  );
}
