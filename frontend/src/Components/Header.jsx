import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import "./Header.css";
import MobileHeader from "./MobileHeader";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);

  const toggleMenu = () => {
    setShowLinks(!showLinks);
  };

  return (
    <>
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className=" !w-[80%] !px-[15px] sm:mx-auto mx-0  ">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center">
                <span className="text-lg font-bold text-gray-800">
                  My Website
                </span>
              </div>
              <div className="md:hidden absolute right-8 top-8">
                <button
                  id="menu-btn"
                  onClick={toggleMenu}
                  className="focus:outline-none"
                >
                  <FaBars className="text-gray-800 " size={23}  />
                </button>
              </div>
              {/* Conditionally render MobileHeader */}
              {showLinks && <MobileHeader showLinks={showLinks} />}
              <div className={`${showLinks ? "flex" : "hidden"} md:flex`}>
                <ul className="sm:flex gap-7 hidden">
                  <li>
                    <a
                      href="client"
                      className="text-gray-500 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Client
                    </a>
                  </li>
                  <li>
                    <a
                      href="/tech-stack"
                      className="text-gray-500 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Tech Stack
                    </a>
                  </li>
                  <li>
                    <a
                      href="/our-team"
                      className="text-gray-500 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Our Team
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contact-us"
                      className="text-gray-500 hover:bg-gray-200 px-3 py-2 rounded-md text-sm font-medium"
                    >
                      Contact us
                    </a>
                  </li>
                  {/* Add other navigation links here */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile navbar */}
    </>
  );
};

export default Header;