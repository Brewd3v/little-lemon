import { Link } from "react-router-dom";
import FoodCard from "../FoodCard";

export default function HomeSpecials() {
  const meals = [
    {
      title: "Greek salad",
      amount: 12.99,
      text: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      img: require("../../assets/greek salad.jpg"),
    },
    {
      title: "Bruchetta",
      amount: 5.99,
      text: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      img: require("../../assets/bruchetta.jpg"),
    },
    {
      title: "Lemon Dessert",
      amount: 5,
      text: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      img: require("../../assets/lemon dessert.jpg"),
    },
  ];

  return (
    <section className="py-12 max-w-[860px] mx-auto px-2">
      <header className="flex items-center justify-between">
        <h2 className="text-title">This weeks specials!</h2>
        <Link
          to="/online-menu"
          className="inline-block max-w-xs px-6 py-3 text-center duration-150 text-lead bg-primary-yellow hover:bg-primary-coral rounded-2xl"
        >
          Online Menu
        </Link>
      </header>
      <main className="grid gap-6 mt-4 sm:grid-cols-2 md:grid-cols-3">
        {meals &&
          meals.map((meal) => (
            <FoodCard
              key={meal.title}
              title={meal.title}
              amount={meal.amount}
              text={meal.text}
              img={meal.img}
            />
          ))}
      </main>
    </section>
  );
}
