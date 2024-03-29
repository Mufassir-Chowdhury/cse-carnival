// Footer.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <footer className="bg-footer-texture bg-cover px-4 py-4 z-50 relative">
            <div className="flex justify-around items-center space-x-5 md:space-x-10 lg:space-x-32">
                {/* First Section: Logo */}
                <div className="lg:mr-8 w-1/2 lg:w-1/3  ">
                    <img src="/image/logo/Carnival logo.png" alt="Footer Logo" className="h-32 lg:h-40" />
                </div>

                {/* Second Section: Links */}
                <div className='flex flex-col lg:flex-row w-1/2 lg:w-2/3 justify-around gap-6 lg:gap-20 '>

                    <div className="text-navbar-link text-sm">
                        <p className="text-lg font-bold mb-4 hidden lg:block">Social Media Links</p>
                        <div className="flex space-x-4">
                            {/* Facebook */}
                            <a href="https://www.facebook.com/sustcsecarnival2024" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} className="text-2xl hover:text-blue-500" />
                            </a>
                            
                            {/* Instagram */}
                            {/* <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} className="text-2xl hover:text-pink-500" />
                            </a> */}
                            
                            {/* LinkedIn */}
                            {/* <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} className="text-2xl hover:text-blue-500" />
                            </a> */}
                        </div>
                    </div>

                    {/* Third Section: Title, Description, Email Textbox, and Send Button */}
                    <div className="text-navbar-link">
                        <h4 className="">

                            &copy; {new Date().getFullYear()} CSE Society, SUST
                            <p>
                                All rights reserved.
                            </p>
                        </h4>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
