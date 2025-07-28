import { useState, useRef, useEffect } from "react";
import css from "./CustomDropdown.module.css";

export default function CustomDropdown({
  options,
  placeholder,
  value,
  onChange,
}) {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef();

  const handleSelect = (option) => {
    onChange(option);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!dropdownRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={css.dropdown} ref={dropdownRef}>
      <div className={css.selector} onClick={() => setOpen((prev) => !prev)}>
        <span className={css.selectedValue}>{value || placeholder}</span>
        <img
          src={open ? "/chevron-up.svg" : "/chevron-down.svg"}
          alt="chevron"
          className={css.chevron}
        />
      </div>

      {open && (
        <ul className={css.menu}>
          {options.map((opt) => (
            <li key={opt} onClick={() => handleSelect(opt)}>
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
