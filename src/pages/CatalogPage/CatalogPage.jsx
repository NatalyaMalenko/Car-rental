import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/operations";
import { selectVisibleCars } from "../../redux/cars/selectors";
import CarList from "../../components/CarList/CarList.jsx";
import css from "./CatalogPage.module.css";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const cars = useSelector(selectVisibleCars);

  useEffect(() => {
    console.log("🔥 useEffect in CatalogPage");

    console.log("dispatch:", dispatch);
    console.log("fetchCars:", fetchCars);
    dispatch(fetchCars());
  }, [dispatch]);
  console.log("CatalogPage mounted");
  // Логування для дебагу
  console.log("Cars:", cars);

  if (!Array.isArray(cars)) return <p>Завантаження...</p>;

  return (
    <div className={css.catalogContainer}>
      <div className={css.catalogSrollArea}>
        {cars.length > 0 ? <CarList cars={cars} /> : <p>No cars found</p>}
      </div>
    </div>
  );
}
