export const selectFavorites = (state) => state.favorites;

export const isFavorite = (carId) => (state) =>
  state.favorites.some((car) => car.id === carId);
