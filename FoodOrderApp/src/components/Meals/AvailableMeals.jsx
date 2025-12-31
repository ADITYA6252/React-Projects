import MealItem from "./MealItem";
import "./Meals.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 18.99,
  },
  {
    id: "m2",
    name: "Pasta",
    description: "An Italian specialty!",
    price: 12.99,
  },
  {
    id: "m3",
    name: "Burger",
    description: "American, raw, meaty",
    price: 16.5,
  },
   {
    id: "m6",
    name: "Butter Naan (2 pcs)",
    description: "Soft naan brushed with butter",
    price: 60,
  },
  {
    id: "m7",
    name: "Rajma Chawal",
    description: "Red kidney beans curry with steamed rice",
    price: 150,
  },
  {
    id: "m8",
    name: "Gulab Jamun",
    description: "Soft milk-solid balls soaked in sugar syrup",
    price: 90,
  },
];

const AvailableMeals = () => {
  return (
    <section className="meals">
      <ul>
        {DUMMY_MEALS.map((meal) => (
          <MealItem key={meal.id} {...meal} />
        ))}
      </ul>
    </section>
  );
};

export default AvailableMeals;
