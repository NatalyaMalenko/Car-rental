import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <div className={css.logo}>
          <svg width="102" height="16">
            <use href="/Logo.svg" />
          </svg>
        </div>
        <nav className={css.nav}>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${css.link} ${isActive ? css.current : ""}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              `${css.link} ${isActive ? css.current : ""}`
            }
          >
            Catalog
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
export default Header;
