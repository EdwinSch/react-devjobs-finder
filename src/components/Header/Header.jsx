import devjobsLogo from "../../assets/devjobs-logo.svg";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

const Header = ({ toggleTheme }) => {
  return (
    <header>
      <img src={devjobsLogo} className="devjobs-logo" alt="devjobs logo" />
      <ThemeSwitch toggleTheme={toggleTheme} />
    </header>
  );
};

export default Header;
