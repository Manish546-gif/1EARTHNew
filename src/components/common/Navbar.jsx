import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/1earthcompletelogo.svg";
import menuIcon from "../../assets/menu.svg";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const isDarkPage = location.pathname === '/contact' || location.pathname === '';

  return (
    <nav className={`w-full absolute fixed top-0 z-40 border-b ${isDarkPage ? 'border-black' : 'border-white'}`}>
      <div className="max-w-8xl mx-auto px-8 sm:px-10 lg:px-12 py-2">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Earth logo" 
                className={`h-12 w-auto ${isDarkPage ? 'filter brightness-0 invert-0' : ''}`} 
              />
            </Link>
          </div>

          <div className="flex items-center">
            <button
              aria-label="Open menu"
              onClick={() => navigate("/menu")}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-300"
            >
              <img 
                src={menuIcon} 
                alt="Open menu" 
                className={`h-8 w-8 ${isDarkPage ? 'filter brightness-0 invert-0' : ''}`} 
              />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;