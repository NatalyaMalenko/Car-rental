import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: [],
  reducers: {
    addFavorite: (state, action) => {
      const exists = state.find((car) => car.id === action.payload.id);
      if (!exists) {
        state.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
      return state.filter((car) => car.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
