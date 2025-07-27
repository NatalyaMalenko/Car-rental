import { Outlet } from "react-router-dom";
import Header from "../Header/Header.jsx";
import { Toaster } from "react-hot-toast";
import css from "./Layout.module.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
export default function Layout() {
  const location = useLocation();
  useEffect(() => {
    console.log("Current route in Layout:", location.pathname);
  }, [location]);
  return (
    <div className={css.layout}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
