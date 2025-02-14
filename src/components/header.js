import React from "react";
import Navbar from "./Navbar";
import "../main.css";

const Header = () => {
    return (
        <header className="bg-white text-black p-3 fixed top-0 left-0 w-full z-10 flex items-center justify-between shadow-md">
            {/* Left Side: Logo and Brand Name */}
            <div className="flex items-center space-x-2">
                <img src="/images/placeHolders/logoPlaceholder.jpg" alt="Logo" className="h-10 w-10" />
                <img src="/images/placeHolders/logo_text.png" alt="Eduana" className="h-5" />
            </div>

            {/* Search Bar */}
            <div className="flex-1 mx-4">
                <input
                    type="text"
                    placeholder="Search"
                    className="border px-4 py-2 rounded-lg w-full max-w-md"
                />
            </div>

            {/* Right Side: Links */}
            <div className="flex items-center space-x-4">
                <a href="/login" className="text-gray-700">Log In</a>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Get Started</button>
            </div>
        </header>
    );
};

export default Header;
