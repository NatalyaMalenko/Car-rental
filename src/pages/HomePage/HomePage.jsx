import css from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={css.homeContainer}>
      <h1>Welcome to Your Personal Contact Manager!</h1>
      <p className={css.text}>
        Welcome to our web application that makes managing your contacts simple
        and convenient.
      </p>
    </div>
  );
}
