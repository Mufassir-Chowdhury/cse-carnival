// Navbar.js

import React , { useEffect, Fragment, useState } from 'react';
import { PrimaryButton } from './Button';
import { Link, useLocation } from 'react-router-dom';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
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
      name: 'DL Sprint',
      link: '/dlsprint',
    },
    {
      name: 'Code Battle',
      link: '/codebattle',
    },
    {
      name: 'Contact us',
      link: '/',
    },
  ];
  return (
    <header className="bg-white">
      <nav className="bg-navbar-texture bg-cover p-1 fixed w-full top-0 z-40"  aria-label="Global">
        <div className="container mx-auto flex flex-row justify-between items-center px-4 gap-10 xl:px-20">
          {/* Logo */}
          <div className="text-white font-bold text-lg ">
            <Link to="/">
              <img
                src={'/image/logo/Carnival logo.png'}
                alt="Your Logo"
                className="h-20"
              />
            </Link>
          </div>
          {/* Navigation Links */}
          <div className='md:flex md:flex-row md:w-full justify-between items-center hidden md:visible'>
              {navigation.map((item) => (
                <Link key={item.link} to={item.link}>
                  <div className={`text-navbar-link hover:border-b pb-1 px-1 ${
                              location.pathname === item.link ? 'border-b' : ''
                            }`}>
                    {item.name}
                  </div>
                </Link>

              ))}
              
            {/* Register Button */}
            <PrimaryButton text="Register" />
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
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="bg-navbar-texture bg-cover flex items-center justify-between px-6 py-6 ">
            <div className="text-white font-bold text-lg ">
              <Link to="/">
                <img
                  src={'/image/logo/Carnival logo.png'}
                  alt="Your Logo"
                  className="h-20"
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
          <div className="mt-6 flow-root px-6 py-2 ">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link key={item.link} to={item.link}>
                    <div className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                      {item.name}
                    </div>
                  </Link>

                ))}
              </div>
              <div className="py-6">
                <PrimaryButton text="Register" />

              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
    
  );
};

export default Navbar;