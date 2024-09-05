import React from "react";
import ThemeToggler from "./ThemeToggler";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

function Header() {
    return (
        <header className="bg-blue-100 dark:bg-gray-900 shadow-md">
            <div className="container mx-auto p-4">
                <div className="flex justify-between items-center ">
                    <Logo />
                    <div className="flex items-center gap-x-6">
                        {/* Desktop Navbar */}
                        <Nav containerStyles="hidden lg:flex gap-x-6 items-center" linkStyles="text-gray-700 dark:text-gray-300 hover:text-blue-500 transition-colors duration-300" />
                        {/* Theme Toggler */}
                        <ThemeToggler />
                        {/* Mobile Navbar */}
                        <div className="lg:hidden">
                            <MobileNav />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
