export const selectVisibleCars = (state) => {
  const { brand, price, mileageFrom, mileageTo } = state.filters;
  return state.cars.items.filter((car) => {
    const matchBrand = !brand || car.make === brand;
    const matchPrice =
      !price || Number(car.rentalPrice.replace("$", "")) <= Number(price);
    const mileage = Number(car.mileage);
    const matchMileageFrom = !mileageFrom || mileage >= Number(mileageFrom);
    const matchMileageTo = !mileageTo || mileage <= Number(mileageTo);
    return matchBrand && matchPrice && matchMileageFrom && matchMileageTo;
  });
};
