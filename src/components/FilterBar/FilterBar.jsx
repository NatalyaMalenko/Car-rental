import { useState } from "react";
import css from "./FilterBar.module.css";

const brands = [
  "Aston Martin",
  "Audi",
  "BMW",
  "Bentley",
  "Buick",
  "Chevrolet",
  "Chrysler",
  "GMC",
  "HUMMER",
];
const prices = [30, 40, 50, 60, 70, 80];

export default function FilterBar({ onSearch }) {
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");

  const handleSearch = () => {
    onSearch({ brand, price, mileageFrom, mileageTo });
  };

  return (
    <div className={css.filterBar}>
      <div className={css.selectWrapper}>
        <select
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          className={css.customSelect}
        >
          <option value="">Choose a brand</option>
          {brands.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </div>

      <div className={css.selectWrapper}>
        <select
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className={css.customSelect}
        >
          <option value="">Choose a price</option>
          {prices.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <input
        type="number"
        placeholder="From"
        value={mileageFrom}
        onChange={(e) => setMileageFrom(e.target.value)}
        className={css.input}
      />
      <input
        type="number"
        placeholder="To"
        value={mileageTo}
        onChange={(e) => setMileageTo(e.target.value)}
        className={css.input}
      />

      <button onClick={handleSearch} className={css.searchButton}>
        Search
      </button>
    </div>
  );
}
