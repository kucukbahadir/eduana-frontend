import React from "react";
import { Link } from "react-router-dom";
import "../main.css";

const Navbar = () => {
  return (
    <nav className="bg-gray-200 h-screen w-32 p-4 fixed top-0 left-0">
      <ul className="flex flex-col space-y-4">
        <li>
          <Link to="/" className="bg-gray-700 text-white p-3 rounded-lg block">Home</Link>
        </li>
        <li>
          <Link to="/login" className="text-gray border-b-2 p-2 hover:border-sky-600 block">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
