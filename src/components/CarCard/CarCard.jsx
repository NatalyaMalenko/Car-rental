import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../../redux/favorites/favoritesSlice";
import { isFavorite } from "../../redux/favorites/favoritesSelectors";
import css from "./CarCard.module.css";

export default function CarCard({ car }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isFav = useSelector(isFavorite(car.id));

  const {
    id,
    img = "",
    make = "",
    model = "",
    year = "",
    rentalPrice = "",
    address = "",
    mileage = 0,
    type = "",
  } = car;

  const addressParts = address?.split(",") || [];
  const city = addressParts[0]?.trim() || "Unknown city";
  const country = addressParts[1]?.trim() || "Unknown country";

  const handleReadMore = () => {
    navigate(`/catalog/${id}`);
  };

  const handleToggleFavorite = () => {
    if (isFav) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(car));
    }
  };

  return (
    <div className={css.card}>
      <div className={css.imageWrapper}>
        <img
          src={img || "https://via.placeholder.com/300x200?text=No+Image"}
          alt={`${make} ${model}`}
          className={css.image}
          onError={(e) => {
            if (e?.target) e.target.style.display = "none";
          }}
        />
        <button className={css.favoriteBtn} onClick={handleToggleFavorite}>
          {isFav ? "💙" : "🤍"}
        </button>
      </div>

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
          <li>{Number(mileage).toLocaleString()} km</li>
        </ul>
      </div>

      <button className={css.button} onClick={handleReadMore}>
        Read more
      </button>
    </div>
  );
}
