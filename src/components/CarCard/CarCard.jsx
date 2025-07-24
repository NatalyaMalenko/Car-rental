import { useNavigate } from "react-router-dom";
import css from "./CarCard.module.css";

export default function CarCard({ car }) {
  const navigate = useNavigate();

  const { id, img, make, model, year, rentalPrice, address, mileage, type } =
    car;

  const city = address.split(",")[0]?.trim();
  const country = address.split(",")[1]?.trim();

  const handleReadMore = () => {
    navigate(`/catalog/${id}`);
  };

  return (
    <div className={css.card}>
      <img src={img} alt={`${make} ${model}`} className={css.image} />
      <div className={css.info}>
        <div className={css.header}>
          <h3>{`${make} ${model}, ${year}`}</h3>
          <span className={css.price}>{rentalPrice}</span>
        </div>
        <ul className={css.meta}>
          <li>{city}</li>
          <li>{country}</li>
          <li>{type}</li>
          <li>SUV</li>
          <li>{mileage.toLocaleString()} km</li>
        </ul>
      </div>
      <button className={css.button} onClick={handleReadMore}>
        Read more
      </button>
    </div>
  );
}
