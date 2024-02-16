import { MdLightMode, MdDarkMode } from "react-icons/md";

const ThemeSwitch = ({ toggleTheme }) => {
  return (
    <label className="toggle">
      <span className="toggle-label">
        <MdLightMode />
      </span>
      <input
        onClick={toggleTheme}
        className="toggle-checkbox"
        type="checkbox"
      />
      <div className="toggle-switch"></div>
      <span className="toggle-label">
        <MdDarkMode />
      </span>
    </label>
  );
};

export default ThemeSwitch;
