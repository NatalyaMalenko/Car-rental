import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchCars } from "./operations";

import { selectNameFilter } from "../filters/selectors";
import { selectCars } from "./selectors";

export const selectVisibleCars = createSelector(
  [selectCars, selectNameFilter],
  (cars, filter) => {
    return cars.filter((car) =>
      (car.make + " " + car.model).toLowerCase().includes(filter.toLowerCase())
    );
  }
);

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default carsSlice.reducer;
