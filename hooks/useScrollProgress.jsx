import { useEffect, useState } from 'react';

const useScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const windowHeight = window.innerHeight;
            const docHeight = document.documentElement.scrollHeight;
            const totalDocScrollLength = docHeight - windowHeight;
            const scrollPosition = (scrollTop / totalDocScrollLength) * 100;

            setScrollProgress(scrollPosition);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return scrollProgress;
};

export default useScrollProgress;
