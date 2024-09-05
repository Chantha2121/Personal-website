"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const links = [
    { path: '/', name: 'home' },
    { path: '/projects', name: 'my projects' },
    { path: '/contact', name: 'contact' }
];

const MobileNav = () => {
    const [isOpen, setIsOpen] = useState(false);
    const currentPath = usePathname();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="lg:hidden">
            {/* Hamburger Icon */}
            <button
                onClick={toggleMenu}
                className="text-2xl p-2 rounded-md focus:outline-none"
            >
                {isOpen ? <AiOutlineClose className="text-gray-700 dark:text-white" /> : <AiOutlineMenu className="text-gray-700 dark:text-white" />}
            </button>

            {/* Mobile Menu */}
            {isOpen && (
                <nav 
                    className={`absolute top-16 right-0 w-64 p-6 flex flex-col space-y-4 rounded-lg shadow-lg bg-white text-gray-700 dark:bg-gray-800 dark:text-white`}
                >
                    {links.map((link) => (
                        <Link
                            href={link.path}
                            key={link.path}
                            className={`capitalize text-lg ${
                                currentPath === link.path
                                    ? 'text-blue-500 font-semibold dark:text-blue-300'
                                    : ''
                            } transition-colors duration-300`}
                            onClick={toggleMenu}
                        >
                            {link.name}
                        </Link>
                    ))}
                </nav>
            )}
        </div>
    );
};

export default MobileNav;
