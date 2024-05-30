import StarIcon from "./icons/Star";

export default function ReviewStars() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <>
      {numbers.map((count) => (
        <StarIcon key={count} />
      ))}
    </>
  );
}
