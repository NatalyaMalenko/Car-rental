import css from "./CarList.module.css";
import CarCard from "../CarCard/CarCard.jsx";

export default function CarList({ cars }) {
  return (
    <ul className={css.containerCarList}>
      {cars.map((car) => (
        <li key={car.id} className={css.carItem}>
          <CarCard car={car} />
        </li>
      ))}
    </ul>
  );
}
