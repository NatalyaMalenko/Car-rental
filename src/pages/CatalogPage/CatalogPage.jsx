import FilterBar from "../../components/FilterBar/FilterBar";
import CarList from "../../components/CarList/CarList";
import { useSelector, useDispatch } from "react-redux";
import { fetchCars } from "../../redux/cars/operations";
import { useEffect } from "react";
import { selectVisibleCars } from "../../redux/cars/selectors";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const cars = useSelector(selectVisibleCars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <>
      <FilterBar />
      <CarList cars={cars} />
    </>
  );
}
