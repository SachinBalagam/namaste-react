import { WEBSITE_LOGO } from "../utils/constants";

const Header = () => {
  return (
    <div className="header-container">
      <img src={WEBSITE_LOGO} alt="Website-logo" className="logo" />
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default Header;
