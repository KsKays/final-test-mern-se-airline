import { useContext } from "react";
import Profile from "./Profile";
import Modal from "./Modal";
import { AuthContext } from "../context/AuthContext";
import { FaUserCircle } from "react-icons/fa";
//import UserProfile from "./UserProfile";
import { FaPlaneUp } from "react-icons/fa6";

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const navItems = (
    <>
      <li tabIndex={0}>
        <summary>Booking</summary>
      </li>
      <li tabIndex={0}>
        <summary>Services</summary>
      </li>
      <li>
        <a href="">Promotion</a>
      </li>
    </>
  );

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm ">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navItems}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl" href="/">
            <FaPlaneUp className="h-6 pr-1 mx-auto" />
            Nakhon Pathom Airline
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {/* Ternary Operator */}
          {user ? (
            <>
              <Profile />
            </>
          ) : (
            <button
              className="btn bg-red text-black rounded-full px-5 flex items-center gap-2"
              onClick={() => document.getElementById("login").showModal()}
            >
              <FaUserCircle className="w-6 h-6" />
              Login
            </button>
          )}
        </div>
        <Modal name="login" />
      </div>
    </div>
  );
};

export default Navbar;
