import React from "react";
import { Link } from "react-router-dom";
import "../main.css";

const Navbar = () => {
    return (
        <nav className="bg-gray-900 w-20 h-screen fixed left-0 top-16 p-4 flex flex-col items-center shadow-lg">
            <ul className="flex flex-col space-y-6 w-full">
                {/*Links with Icons */}
                <li>
                    <Link to="/" className="flex flex-col items-center text-gray-400 hover:text-white">
                        <img src="/images/placeHolders/logoPlaceholder.jpg" alt="Home" className="h-6 w-6" />
                    </Link>
                </li>
                <li>
                    <Link to="/overview" className="flex flex-col items-center text-gray-400 hover:text-white">
                        <img src="/images/icons/overviewIcon.svg" alt="overview" className="h-6 w-6" />
                    </Link>
                </li>
                <li>
                    <Link to="/users" className="flex flex-col items-center text-gray-400 hover:text-white">
                        <img src="/images/icons/userIcon.svg" alt="user" className="h-6 w-6" />
                    </Link>
                </li>
                <li>
                    <Link to="/inbox" className="flex flex-col items-center text-gray-400 hover:text-white">
                        <img src="/images/icons/inboxIcon.svg" alt="inbox" className="h-6 w-6" />
                    </Link>
                </li>
            </ul>

            {/* Bottom Section for languages and settings */}
            <div className="mt-auto space-y-4">
                <Link to="/language" className="flex flex-col items-center text-gray-400 hover:text-white">
                    <img src="/images/icons/languageIcon.svg" alt="Language" className="h-3 w-3" />
                </Link>
                <Link to="/settings" className="flex flex-col items-center text-gray-400 hover:text-white">
                    <img src="/images/icons/settingsIcon.svg" alt="Settings" className="h-3 w-3" />
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;
