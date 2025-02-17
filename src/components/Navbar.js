import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../main.css";

const Navbar = () => {
    const [isUsersOpen, setIsUsersOpen] = useState(false);
    const [isNavbarHovered, setIsNavbarHovered] = useState(false);
    const location = useLocation();

    // Close dropdown when user navigates
    useEffect(() => {
        setIsUsersOpen(false);
    }, [location]);

    return (
        <nav 
            className="bg-gray-900 w-20 hover:w-60 h-screen fixed left-0 top-16 p-4 flex flex-col 
                        items-center group transition-all duration-300 shadow-lg"
            onMouseEnter={() => setIsNavbarHovered(true)}
            onMouseLeave={() => {
                setIsNavbarHovered(false);
                setIsUsersOpen(false);
            }}
        >
            <ul className="flex flex-col space-y-6 w-full">
                <li>
                    <Link to="/" className="flex items-center group-hover:justify-start justify-center w-full text-gray-400 hover:text-white">
                        <img src={`${process.env.PUBLIC_URL}/logo192.png`} alt="Home" className="h-6 w-6" />
                        <span className="hidden group-hover:inline-block ml-3 text-white transition-opacity duration-300">Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin-dashboard" className="flex items-center group-hover:justify-start justify-center w-full text-gray-400 hover:text-white">
                        <img src={`${process.env.PUBLIC_URL}/images/icons/overviewIcon.svg`} alt="Overview" className="h-6 w-6" />
                        <span className="hidden group-hover:inline-block ml-3 text-white transition-opacity duration-300">Overview</span>
                    </Link>
                </li>

                {/* Users Dropdown */}
                <li className="w-full relative">
                    <button 
                        onClick={() => setIsUsersOpen(!isUsersOpen)} 
                        className="flex items-center group-hover:justify-start justify-center w-full text-gray-400 hover:text-white">
                        <img src={`${process.env.PUBLIC_URL}/images/icons/userIcon.svg`} alt="Users" className="h-6 w-6" />
                        <span className="hidden group-hover:inline-block ml-3 text-white transition-opacity duration-300">Users</span>
                        <span className="hidden group-hover:inline-block ml-auto mr-4 text-gray-400">
                            {isUsersOpen ? "▲" : "▼"}
                        </span>
                    </button>

                    {/* Dropdown Options */}
                    {isUsersOpen && (
                        <ul 
                            className="absolute left-full top-0 bg-gray-800 rounded-lg shadow-lg p-2 w-48 space-y-2"
                        >
                            <li>
                                <Link to="/admin/createUser" className="block text-gray-400 hover:text-white p-2">Create Users</Link>
                            </li>
                            <li>
                                <Link to="/users/manage" className="block text-gray-400 hover:text-white p-2">Manage Users</Link>
                            </li>
                            <li>
                                <Link to="/users/settings" className="block text-gray-400 hover:text-white p-2">User Settings</Link>
                            </li>
                        </ul>
                    )}
                </li>

                <li>
                    <Link to="/inbox" className="flex items-center group-hover:justify-start justify-center w-full text-gray-400 hover:text-white">
                        <img src={`${process.env.PUBLIC_URL}/images/icons/inboxIcon.svg`} alt="Inbox" className="h-6 w-6" />
                        <span className="hidden group-hover:inline-block ml-3 text-white transition-opacity duration-300">Inbox</span>
                    </Link>
                </li>
                <li>
                    <Link to="/authentication" className="flex items-center group-hover:justify-start justify-center w-full text-gray-400 hover:text-white">
                        <img src={`${process.env.PUBLIC_URL}/images/icons/authenticationIcon.svg`} alt="Authentication" className="h-6 w-6" />
                        <span className="hidden group-hover:inline-block ml-3 text-white transition-opacity duration-300">Auth</span>
                    </Link>
                </li>
            </ul>

            {/* Divider */}
            <div className="w-16 group-hover:w-full h-[1px] bg-gray-600 transition-all duration-300 my-4"></div>

            {/* Bottom Section */}
            <div className="mt-auto mb-20 flex space-x-4">
                <Link to="/language" className="flex items-center text-gray-400 hover:text-white space-x-4">
                    <img src={`${process.env.PUBLIC_URL}/images/icons/languageIcon.svg`} alt="Language" className="h-8 w-8" />
                </Link>
                <Link to="/settings" className="flex items-center text-gray-400 hover:text-white space-x-4">
                    <img src={`${process.env.PUBLIC_URL}/images/icons/settingsIcon.svg`} alt="Settings" className="h-8 w-8" />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
