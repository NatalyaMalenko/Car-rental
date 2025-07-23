import Button from "../../components/Button/Button.jsx";
import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.homeContainer}>
      <h1>Find your perfect rental car</h1>
      <p className={css.text}>
        Reliable and budget-friendly rentals for any journey
      </p>

      <Button>View Catalog</Button>
    </div>
  );
}
