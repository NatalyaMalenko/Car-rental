RentalCar Web Application

RentalCar is a frontend web application for a car rental company. This application allows users to browse available cars, view detailed information about each vehicle, and submit a rental request. The app is built using React, Redux, React Router, and Axios, with styling managed through CSS Modules.

🚀 Technologies Used

- React + Vite - for a fast and efficient development environment.
- Redux Toolkit - for managing global application state.
- React Router v6 - for handling client-side routing.
- Axios - for making HTTP requests to the backend API.
- CSS Modules - for modular and scoped component styling.

🔗 Backend API

This application is integrated with a ready-to-use backend API.  
📚 [API Documentation](https://car-rental-api.goit.global/api-docs/)

🗺️ Pages

1.  Home Page (`/`)

- Features a banner with a call-to-action encouraging users to rent a car.

2.  Catalog Page (`/catalog`)

- Displays a list of available cars.
- Supports filtering by brand, price per day, and mileage.
- Allows adding cars to a list of favorites.

3.  Car Details Page (`/catalog/:id`)

- Shows detailed information about the selected car.
- Includes an image gallery and rental form.

🧩 Features

- Responsive and user-friendly interface
- Filterable catalog of cars
- Detailed view of each car
- Rental request form
- Favorites functionality using Redux

🛠️ Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/rentalcar.git
   cd rentalcar
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
    npm run dev
   ```
