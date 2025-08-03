import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(userContext);

  //Selector : subscribe to store 
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems)


  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 py-3 shadow-md sticky top-0 bg-white z-50">
      <div className="w-24 mb-2 sm:mb-0 ">
        <img className="w-full object-contain" src={LOGO_URL} alt="App Logo" />
      </div>
      <div className="w-full sm:w-auto">
        <ul className="flex flex-wrap justify-center sm:justify-end items-center gap-4 text-sm sm:text-base font-medium text-gray-700">
          <li>
            OnlineStatus: {onlineStatus ? "✅ " : "🔴"}
          </li>
          <li>
            <Link to="/" className="hover:text-orange-500 transition">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-orange-500 transition">About Us</Link>
          </li>
          <li><Link to="/contact" className="hover:text-orange-500 transition">Contact Us</Link></li>
          <li><Link to="/grocery" className="hover:text-orange-500 transition">Grocery</Link></li>
          <li className="px-4 font-bold text-xl "> 🛒-({cartItems.length}) </li>
          <button
            className="bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 transition"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
