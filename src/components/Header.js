import { WEBSITE_LOGO } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [value, setValue] = useState("Logout");

  const cartItems = useSelector((each) => each.cart.items);
  // console.log(cartItems);

  const status = UseOnlineStatus();

  const { name } = useContext(UserContext);

  return (
    <div className="flex justify-between items-center bg-pink-100 pl-3 pr-3 shadow-lg">
      <img src={WEBSITE_LOGO} alt="Website-logo" className="w-20 pt-2 pb-2" />
      <ul className="flex ">
        <li className="mr-3">Online Status : {status ? "✅" : "❌"}</li>
        <Link to="/" className="mr-5">
          <li>Home</li>
        </Link>
        <Link to="/about" className="mr-5">
          <li>About us</li>
        </Link>
        <Link to="/contact" className="mr-5">
          <li>Contact us</li>
        </Link>
        <Link to="/cart" className="mr-5 font-bold">
          <li>Cart - ({cartItems.length} items)</li>
        </Link>

        <li>
          <button
            onClick={() => {
              value === "Logout" ? setValue("Login") : setValue("Logout");
            }}
          >
            {value}
          </button>
        </li>
        <li className="font-bold ml-2">({name})</li>
      </ul>
    </div>
  );
};

export default Header;
