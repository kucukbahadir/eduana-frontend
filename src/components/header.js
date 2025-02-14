import React from "react";
import Navbar from "./Navbar";
import "../main.css";

const Header = () => {
    return (
        <header className="bg-gray-100 text-black p-4 fixed top-0 left-0 w-full z-10">
            <h1 className="text-2xl font-bold">Eduana</h1>
            <Navbar />
        </header>
    );
};

export default Header;
