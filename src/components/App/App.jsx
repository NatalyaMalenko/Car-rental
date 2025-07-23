import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../Layout/Layout";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const CarDetailPage = lazy(() =>
  import("../../pages/CarDetailsPage/CarDetailsPage")
);
const CatalogPage = lazy(() => import("../../pages/CatalogPage/CatalogPage"));

export default function App() {
  return (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<CarDetailPage />} />
        </Routes>
      </Suspense>
    </Layout>
  );
}
