import React from "react";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4">
            <h1 className="text-2xl font-bold">meow meow meow</h1>
            <Navbar /> {/* Including the Navbar component */}
        </header>
    );
};

export default Header;