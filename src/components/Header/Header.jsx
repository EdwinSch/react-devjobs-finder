import devjobsLogo from "../../assets/devjobs-logo.svg";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import { Link } from "react-router-dom";

const Header = ({ toggleTheme }) => {
  return (
    <header>
      <Link to={"/"}>
        <img src={devjobsLogo} className="devjobs-logo" alt="devjobs logo" />
      </Link>
      <ThemeSwitch toggleTheme={toggleTheme} />
    </header>
  );
};

export default Header;
