import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filters/selectors";

export const selectCars = (state) => state.cars.items;
export const selectLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;

export const selectVisibleCars = createSelector(
  [selectCars, selectNameFilter],
  (cars, filter) => {
    if (!filter) return cars;

    return cars.filter((car) =>
      (car.make + " " + car.model).toLowerCase().includes(filter.toLowerCase())
    );
  }
);
