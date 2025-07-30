import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "./CarDetailsCard.module.css";

export default function CarCard({ car }) {
  const {
    id,
    img,
    make,
    model,
    year,
    address,
    rentalPrice,
    mileage,
    description,
    accessories,
    functionalities,
    rentalConditions,
    type,
    fuelConsumption,
    engineSize,
  } = car;

  const [selectedDate, setSelectedDate] = useState(null);

  const city = address.split(",")[1]?.trim();
  const country = address.split(",")[2]?.trim();

  return (
    <div className={css.card}>
      <div className={css.leftSide}>
        <img src={img} alt={`${make} ${model}`} className={css.image} />
        <form className={css.form}>
          <h3>Book your car now</h3>
          <p>Stay connected! We are always ready to help you.</p>
          <input type="text" placeholder="Name*" required />
          <input type="email" placeholder="Email*" required />
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="dd/MM/yyyy"
            placeholderText="Booking date"
            minDate={new Date()}
            maxDate={new Date("2026-12-31")}
            className={css.dateInput}
          />
          <textarea placeholder="Comment" />
          <button type="submit">Send</button>
        </form>
      </div>

      <div className={css.rightSide}>
        <h2>
          {make} {model}, {year} <span>ID: {id}</span>
        </h2>
        <p className={css.location}>
          📍 {city}, {country}{" "}
          <span>Mileage: {mileage.toLocaleString()} km</span>
        </p>
        <p className={css.price}>{rentalPrice}</p>
        <p className={css.description}>{description}</p>

        <section className={css.section}>
          <h4>Rental Conditions:</h4>
          <ul>
            {rentalConditions.map((condition, idx) => (
              <li key={idx}>✔ {condition}</li>
            ))}
          </ul>
        </section>

        <section className={css.section}>
          <h4>Car Specifications:</h4>
          <ul>
            <li>📅 Year: {year}</li>
            <li>🚗 Type: {type}</li>
            <li>⛽ Fuel Consumption: {fuelConsumption}</li>
            <li>🧩 Engine Size: {engineSize}</li>
          </ul>
        </section>

        <section className={css.section}>
          <h4>Accessories and functionalities:</h4>
          <ul>
            {[...accessories, ...functionalities].map((item, idx) => (
              <li key={idx}>✔ {item}</li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
