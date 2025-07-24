import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button.jsx";
import css from "./HomePage.module.css";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className={css.homeContainer}>
      <div>
        <h1>Find your perfect rental car</h1>
        <p className={css.text}>
          Reliable and budget-friendly rentals for any journey
        </p>
        <Button onClick={() => navigate("/catalog")}>View Catalog</Button>
      </div>
    </div>
  );
}
