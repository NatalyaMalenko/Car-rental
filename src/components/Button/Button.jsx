import css from "./Button.module.css";

const Button = ({ children }) => {
  return (
    <div>
      <button className={css.button}>{children}</button>
    </div>
  );
};
export default Button;
