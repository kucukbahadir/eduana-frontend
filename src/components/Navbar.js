import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../main.css";

const Navbar = () => {
    const [isUsersOpen, setIsUsersOpen] = useState(false);
    const [isNavbarHovered, setIsNavbarHovered] = useState(false);

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
                {/* Links with Icons */}
                <li>
                    <Link to="/" className="flex items-center group-hover:justify-start justify-center w-full text-gray-400 hover:text-white">
                        <img src="/logo192.png" alt="Home" className="h-6 w-6" />
                        <span className="hidden group-hover:inline-block ml-3 text-white transition-opacity duration-300">Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin-dashboard" className="flex items-center group-hover:justify-start justify-center w-full text-gray-400 hover:text-white">
                        <img src="/images/icons/overviewIcon.svg" alt="Overview" className="h-6 w-6" />
                        <span className="hidden group-hover:inline-block ml-3 text-white transition-opacity duration-300">Overview</span>
                    </Link>
                </li>

                {/* Users Dropdown */}
                <li className="w-full">
                    <button 
                        onClick={() => setIsUsersOpen(!isUsersOpen)} 
                        className="flex items-center group-hover:justify-start justify-center w-full text-gray-400 hover:text-white">
                        <img src="/images/icons/userIcon.svg" alt="Users" className="h-6 w-6" />
                        <span className="hidden group-hover:inline-block ml-3 text-white transition-opacity duration-300">Users</span>
                        <span className="hidden group-hover:inline-block ml-auto mr-4 text-gray-400">
                            {isUsersOpen ? "▲" : "▼"}
                        </span>
                    </button>

                    {/* Dropdown Options */}
                    <ul 
                        className={`overflow-hidden transition-all duration-300 
                                    ${isUsersOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"} space-y-2 mt-2 ml-9`}
                    >
                        <li>
                            <Link to="/admin/createUser" className="flex items-center text-gray-400 hover:text-white">
                                <span className="text-sm"> Create Users</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/users/manage" className="flex items-center text-gray-400 hover:text-white">
                                <span className="text-sm"> Manage Users</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/users/settings" className="flex items-center text-gray-400 hover:text-white">
                                <span className="text-sm"> User Settings</span>
                            </Link>
                        </li>
                    </ul>
                </li>

                <li>
                    <Link to="/inbox" className="flex items-center group-hover:justify-start justify-center w-full text-gray-400 hover:text-white">
                        <img src="/images/icons/inboxIcon.svg" alt="Inbox" className="h-6 w-6" />
                        <span className="hidden group-hover:inline-block ml-3 text-white transition-opacity duration-300">Inbox</span>
                    </Link>
                </li>
                <li>
                    <Link to="/authentication" className="flex items-center group-hover:justify-start justify-center w-full text-gray-400 hover:text-white">
                        <img src="/images/icons/authenticationIcon.svg" alt="Authentication" className="h-6 w-6" />
                        <span className="hidden group-hover:inline-block ml-3 text-white transition-opacity duration-300">Auth</span>
                    </Link>
                </li>
            </ul>

            {/* Divider */}
            <div className="w-16 group-hover:w-full h-[1px] bg-gray-600 transition-all duration-300 my-4"></div>

            {/* Extra Links Below Divider */}
            <ul className="flex flex-col space-y-6 w-full">
                <li>
                    <Link to="/docs" className="flex items-center group-hover:justify-start justify-center w-full text-gray-400 hover:text-white">
                        <img src="/images/icons/documentsIcon.svg" alt="Docs" className="h-6 w-6" />
                        <span className="hidden group-hover:inline-block ml-3 text-white transition-opacity duration-300">Docs</span>
                    </Link>
                </li>
                <li>
                    <Link to="/components" className="flex items-center group-hover:justify-start justify-center w-full text-gray-400 hover:text-white">
                        <img src="/images/icons/componentsIcon.svg" alt="Components" className="h-6 w-6" />
                        <span className="hidden group-hover:inline-block ml-3 text-white transition-opacity duration-300">Components</span>
                    </Link>
                </li>
                <li>
                    <Link to="/help" className="flex items-center group-hover:justify-start justify-center w-full text-gray-400 hover:text-white">
                        <img src="/images/icons/helpIcon.svg" alt="Help" className="h-6 w-6" />
                        <span className="hidden group-hover:inline-block ml-3 text-white transition-opacity duration-300">Help</span>
                    </Link>
                </li>
            </ul>

            {/* Bottom Section for Languages and Settings */}
            <div className="mt-auto mb-20 flex space-x-4">
                <Link to="/language" className="flex items-center text-gray-400 hover:text-white space-x-4">
                    <img src="/images/icons/languageIcon.svg" alt="Language" className="h-8 w-8" />
                </Link>
                <Link to="/settings" className="flex items-center text-gray-400 hover:text-white space-x-4">
                    <img src="/images/icons/settingsIcon.svg" alt="Settings" className="h-8 w-8" />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
