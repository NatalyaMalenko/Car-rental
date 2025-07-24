import { Outlet } from "react-router-dom";
import Header from "../Header/Header.jsx";
import { Toaster } from "react-hot-toast";
import css from "./Layout.module.css";

export default function Layout() {
  return (
    <div className={css.container}>
      <Header />
      <main>
        <Outlet />
      </main>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
