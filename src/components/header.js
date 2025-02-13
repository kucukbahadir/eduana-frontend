import React from "react";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4 fixed top-0 left-0 w-full z-10">
            <h1 className="text-2xl font-bold">meow meow meow</h1>
            <Navbar /> {/* Navbar appears under the header */}
        </header>
    );
};

export default Header;
