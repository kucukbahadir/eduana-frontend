import React from "react";
import { Link } from "react-router-dom";
import "../main.css";

const Navbar = () => {
    return (
        <nav className="bg-gray-800 w-60 h-screen fixed left-0 top-[4rem] p-6 shadow-lg">
            <ul className="flex flex-col space-y-4">
                <li>
                    <Link to="/" className="block bg-gray-700 text-white p-3 rounded-lg hover:bg-gray-600">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/login" className="block text-gray-700 p-3 rounded-lg hover:bg-gray-300">
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
