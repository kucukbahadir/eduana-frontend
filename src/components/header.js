import React from "react";
import Navbar from "./Navbar";
import "../main.css";

const Header = () => {
    return (
        <header className="bg-white text-black h-16 px-6 fixed top-0 left-0 w-full z-10 flex items-center justify-between shadow-md">
            {/* Logo and Brand Name */}
            <div className="flex items-center space-x-9 flex-1"> 
                <img src="/images/placeHolders/logoPlaceholder.jpg" alt="Logo" className="h-10 w-10" />
                <img src="/images/placeHolders/logo_text.png" alt="Eduana" className="h-4 w-auto" />
                
                {/* Search Bar */}
                <input
                    type="text"
                    placeholder="Search"
                    className="border px-4 py-2 rounded-lg w-full max-w-md ml-6"
                />
            </div>

            {/* Links */}
            <div className="flex items-center space-x-4">
                <a href="/login" className="text-gray-700">Log In</a>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Get Started</button>
            </div>
        </header>
    );
};

export default Header;
