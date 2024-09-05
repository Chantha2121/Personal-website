"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    { path: '/', name: 'home' },
    { path: '/projects', name: 'my projects' },
    { path: '/contact', name: 'contact' }
];

const Nav = ({ containerStyles, linkStyles }) => {
    const path = usePathname();
    return (
        <nav className={`${containerStyles}`}>
            {links.map((link) => (
                <Link
                    href={link.path}
                    key={link.path}
                    className={`capitalize ${linkStyles} ${path === link.path ? 'text-blue-500 border-b-2 border-blue-500' : ''} py-1`}
                >
                    {link.name}
                </Link>
            ))}
        </nav>
    );
};

export default Nav;
