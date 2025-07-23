import Header from "../Header/Header.jsx";
import { Toaster } from "react-hot-toast";
import css from "./Layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={css.container}>
      <Header />
      {children}
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
