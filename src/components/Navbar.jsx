// Navbar.js

import React , { useEffect } from 'react';
import { PrimaryButton } from './Button';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {
  const location = useLocation();

  useEffect(()=>{
    window.scrollTo(0,0);
  }, [location]);

  return (
    <nav className="bg-navbar-texture bg-cover p-1 fixed w-full top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center px-20">
        {/* Logo */}
        <div className="text-white font-bold text-lg md:mr-5">
          <Link to="/">
            <img
              src={'/image/logo/Carnival logo.png'}
              alt="Your Logo"
              className="h-20"
            />
          </Link>
        </div>
        {/* Navigation Links */}
          <Link to="/">
            <div className={`text-navbar-link hover:border-b pb-1 px-1 ${
                        location.pathname === '/' ? 'border-b' : ''
                      }`}>
              Home
            </div>
          </Link>
          <Link to="/iupc">
            <div className={`text-navbar-link hover:border-b pb-1 px-1 ${
                        location.pathname === '/iupc' ? 'border-b' : ''
                      }`}>
              IUPC
            </div>
          </Link>
          <Link to="/hackathon">
            <div className={`text-navbar-link hover:border-b pb-1 px-1 ${
                        location.pathname === '/hackathon' ? 'border-b' : ''
                      }`}>
              Hackathon
            </div>
          </Link>
          <Link to="/dlsprint">
            <div className={`text-navbar-link hover:border-b pb-1 px-1 ${
                        location.pathname === '/dlsprint' ? 'border-b' : ''
                      }`}>
              DL Sprint
            </div>
          </Link>
          <Link to="/codebattle">
            <div className={`text-navbar-link hover:border-b pb-1 px-1 ${
                        location.pathname === '/codebattle' ? 'border-b' : ''
                      }`}>
              Code Battle
            </div>
          </Link>
          <Link to="/">
            <div className="text-navbar-link hover:border-b pb-1 px-1">
              Contact us
            </div>
          </Link>

        {/* Register Button */}
        <PrimaryButton text="Register" />
        </div>
    </nav>
  );
};

export default Navbar;