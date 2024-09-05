'use client';

import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggler = () => {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Prevent rendering until the component is mounted
    if (!mounted) {
        return null;
    }

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <Button 
            variant="outline"
            size="icon"
            onClick={toggleTheme} 
            className="relative flex items-center justify-center p-2"
            aria-label="Toggle Theme"
        >
            <MoonIcon 
                className={`h-[1.2rem] w-[1.4rem] transition-transform duration-300 ${
                    theme === 'dark' ? 'opacity-100' : 'opacity-0'
                }`} 
            />
            <SunIcon 
                className={`absolute h-[1.2rem] w-[1.4rem] transition-transform duration-300 ${
                    theme === 'dark' ? 'opacity-0' : 'opacity-100'
                }`} 
            />
        </Button>
    );
};

export default ThemeToggler;
