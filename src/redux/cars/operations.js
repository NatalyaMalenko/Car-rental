import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://car-rental-api.goit.global";

// Thunk для каталогу
export const fetchCars = createAsyncThunk(
  "cars/fetchCars",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/cars");
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// ⬇️ ОКРЕМА функція для деталей однієї машини (НЕ thunk)
export const getCarById = async (id) => {
  const response = await axios.get(`/cars/${id}`);
  return response.data;
};
