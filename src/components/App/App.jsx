import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom"; // ✅ ТУТ useLocation і Routes
import Layout from "../Layout/Layout";
import { useEffect } from "react";
console.log("App loaded");
const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const CarDetailsPage = lazy(() =>
  import("../../pages/CarDetailsPage/CarDetailsPage.jsx")
);
const CatalogPage = lazy(() =>
  import("../../pages/CatalogPage/CatalogPage.jsx")
);

export default function App() {
  const location = useLocation();

  useEffect(() => {
    console.log("Current route:", location.pathname);
  }, [location]);

  return (
    <Layout>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CarDetailsPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
