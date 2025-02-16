import React from "react";
import { Link } from "react-router-dom";
import "../main.css";

const Navbar = () => {
    return (
        <nav className="bg-gray-900 w-20 h-screen fixed left-0 top-16 p-4 flex flex-col items-center shadow-lg 
                        transition-all duration-300 group hover:w-60">
            <ul className="flex flex-col space-y-6 w-full">
                {/* Links with Icons */}
                <li>
                    <Link to="/" className="flex items-center text-gray-400 hover:text-white space-x-4">
                        <img src="/images/placeHolders/logoPlaceholder.jpg" alt="Home" className="h-6 w-6" />
                        <span className="hidden group-hover:inline-block transition-opacity duration-300">Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/overview" className="flex items-center text-gray-400 hover:text-white space-x-4">
                        <img src="/images/icons/overviewIcon.svg" alt="Overview" className="h-6 w-6" />
                        <span className="hidden group-hover:inline-block transition-opacity duration-300">Overview</span>
                    </Link>
                </li>
                <li>
                    <Link to="/users" className="flex items-center text-gray-400 hover:text-white space-x-4">
                        <img src="/images/icons/userIcon.svg" alt="Users" className="h-6 w-6" />
                        <span className="hidden group-hover:inline-block transition-opacity duration-300">Users</span>
                    </Link>
                </li>
                <li>
                    <Link to="/inbox" className="flex items-center text-gray-400 hover:text-white space-x-4">
                        <img src="/images/icons/inboxIcon.svg" alt="Inbox" className="h-6 w-6" />
                        <span className="hidden group-hover:inline-block transition-opacity duration-300">Inbox</span>
                    </Link>
                </li>
                <li>
                    <Link to="/authentication" className="flex items-center text-gray-400 hover:text-white space-x-4">
                        <img src="/images/icons/authenticationIcon.svg" alt="Authentication" className="h-6 w-6" />
                        <span className="hidden group-hover:inline-block transition-opacity duration-300">Auth</span>
                    </Link>
                </li>
            </ul>

            {/* Bottom Section for Languages and Settings */}
            <div className="mt-auto mb-20 flex space-x-4">
                <Link to="/language" className="flex items-center text-gray-400 hover:text-white space-x-4">
                    <img src="/images/icons/languageIcon.svg" alt="Language" className="h-8 w-8" />
                    <span className="hidden group-hover:inline-block transition-opacity duration-300">Language</span>
                </Link>
                <Link to="/settings" className="flex items-center text-gray-400 hover:text-white space-x-4">
                    <img src="/images/icons/settingsIcon.svg" alt="Settings" className="h-8 w-8" />
                    <span className="hidden group-hover:inline-block transition-opacity duration-300">Settings</span>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
