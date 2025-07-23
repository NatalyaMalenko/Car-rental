import { NavLink } from "react-router-dom";
import css from "./Header.module.css";
const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <div className={css.logo}>
          <svg width="102" height="16">
            <use href="../../../public/Logo.svg" />
          </svg>
        </div>
        <nav className={css.nav}>
          <NavLink className={css.link} to="/">
            Home
          </NavLink>
          <NavLink className={css.link} to="/catalog">
            Catalog
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
export default Header;
