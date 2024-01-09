// Navbar.js

import React , { useEffect, useState } from 'react';
import { PrimaryButton } from './Button';
import { Link, useLocation } from 'react-router-dom';
import { Dialog } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(()=>{
    window.scrollTo(0,0);
  }, [location]);
  const navigation = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'IUPC',
      link: '/iupc',
    },
    { 
      name: 'Hackathon',
      link: '/hackathon',
    },
    {
      name: 'DL Enigma 1.0',
      link: '/dlsprint',
    },
    {
      name: 'Code Battle',
      link: '/codebattle',
    },
    {
      name: 'Contact us',
      link: '/contactus',
    },
  ];
  return (
    <header className="bg-white">
      <nav className="bg-navbar-texture bg-cover fixed w-screen top-0 z-40"  aria-label="Global">
        <div className="container mx-auto flex flex-row justify-between md:justify-around items-center px-4 gap-10 xl:px-10">
          {/* Logo */}
          <div className="text-white font-bold text-lg w-fit ">
            <Link to="/">
              <img
                src={'/image/logo/Carnival logo.png'}
                alt="Your Logo"
                className="w-32 lg:w-40 h-24"
              />
            </Link>
          </div>
          {/* Navigation Links */}
          <div className='md:flex md:flex-row md:w-screen justify-between items-center hidden md:visible'>
              {navigation.map((item) => (
                <Link key={item.link} to={item.link}>
                  <div className={`text-navbar-link font-lato hover:border-b pb-1 px-1 ${
                              location.pathname === item.link ? 'border-b' : ''
                            }`}>
                    {item.name}
                  </div>
                </Link>

              ))}
              
            {/* Register Button */}
            {/* <PrimaryButton text="Register" /> */}
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6 stroke-white" aria-hidden="true" />
            </button>
          </div>
        </div>    
      </nav>
      
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-screen h-fit overflow-y-auto  bg-menu-body md:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="bg-navbar-texture bg-cover">
            <div className='container mx-auto flex items-center justify-between md:justify-around px-4 gap-10 xl:px-10'>

              <div className="text-white font-bold text-lg ">
                <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                  <img
                    src={'/image/logo/Carnival logo.png'}
                    alt="Your Logo"
                    className="w-32 h-24"
                  />
                </Link>
              </div>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white stroke-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="my-6 flow-root px-6 py-2 ">
            <div className="-my-6 divide-y divide-gray-500/10 text-right">
              <div className="flex flex-col space-y-6">
                {navigation.map((item) => (
                  <Link key={item.link} to={item.link} onClick={() => setMobileMenuOpen(false)}>
                    <div className="-mx-3 block rounded-lg px-3 py-2 text-lg font-semibold leading-7 text-navbar">
                      {item.name}
                    </div>
                  </Link>

                ))}
              </div>
              {/* <div className="py-6">
                <PrimaryButton text="Register" />

              </div> */}
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
    
  );
};

export default Navbar;