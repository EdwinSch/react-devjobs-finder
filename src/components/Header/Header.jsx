import devjobsLogo from "../../assets/logos/devjobs-logo.svg";

const Header = () => {
  return (
    <header>
      <img src={devjobsLogo} className="devjobs-logo" alt="devjobs logo" />
      <div className="switch">CLR SWITCH</div>
    </header>
  );
};

export default Header;
