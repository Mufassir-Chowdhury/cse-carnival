// Footer.js

import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-footer-texture bg-cover py-8 px-4 z-50 relative">
            <div className="flex justify-center items-center space-x-10 lg:space-x-32">
                {/* First Section: Logo */}
                <div className="lg:mr-8 hidden md:block">
                    <img src="/image/logo/Carnival logo.png" alt="Footer Logo" className="h-32 lg:h-48" />
                </div>

                {/* Second Section: Links */}
                <div className="text-navbar-link text-sm">
                    <div className="">
                        <img src="/image/logo/Carnival logo.png" alt="Footer Logo" className="h-24 md:hidden" />
                    </div>
                    <p className="text-lg font-bold mb-4 hidden md:block">Company</p>
                    <a href="#" className="block mb-2">News</a>
                    <a href="#" className="block mb-2">About Us</a>
                    <a href="#" className="block mb-2">Contact us</a>
                    <a href="#" className="block mb-2">Join us</a>
                </div>

                {/* Third Section: Title, Description, Email Textbox, and Send Button */}
                <div className="text-navbar-link">
                    <h4 className="text-2xl font-bold mb-2">
                        <span>
                            Newsdealers
                        </span>
                        <span className='text-title text-2xl'> !</span>
                    </h4>
                    <p className="mb-2">Subscribe us to get .........</p>
                    <input
                        type="email"
                        placeholder=""
                        className="bg-navbar-link text-black px-4 py-2 rounded-md mb-2"
                    />
                    <button className="bg-navbar-button text-white px-4 py-2 ml-6 rounded-md">Send</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
