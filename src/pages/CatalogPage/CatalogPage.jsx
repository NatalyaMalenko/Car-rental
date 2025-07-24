import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/cars/operations";
import { selectVisibleCars } from "../../redux/cars/selectors";
import CarList from "../../components/CarList/CarList.jsx";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const cars = useSelector(selectVisibleCars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div>
      {cars.length > 0 ? <CarList cars={cars} /> : <p>No cars found</p>}
    </div>
  );
}
