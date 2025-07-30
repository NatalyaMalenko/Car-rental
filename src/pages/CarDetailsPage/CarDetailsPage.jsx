import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCarById } from "../../redux/cars/operations";
import CarDetailsCard from "../../components/CarDetailsCard/CarDetailsCard.jsx";
import Spinner from "../../components/Loader/Loader.jsx";

export default function CarDetailsPage() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getCarById(id);
        setCar(data);
      } catch {
        setError("Failed to load car.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <Spinner />;
  if (error) return <p>{error}</p>;
  if (!car) return <p>Car not found.</p>;

  return <CarDetailsCard car={car} />;
}
