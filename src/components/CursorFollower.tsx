'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CursorFollower() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);

            // Check if hovering over interactive elements
            const target = e.target as HTMLElement;
            const isInteractive =
                target.tagName.toLowerCase() === 'a' ||
                target.tagName.toLowerCase() === 'button' ||
                target.closest('a') !== null ||
                target.closest('button') !== null ||
                target.getAttribute('role') === 'button' ||
                target.classList.contains('interactive');

            setIsHovering(isInteractive);
        };

        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.documentElement.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [isVisible]);

    return (
        <>
            <motion.div
                className="fixed pointer-events-none z-50 rounded-full bg-primary/40 backdrop-blur-sm"
                animate={{
                    x: mousePosition.x - (isHovering ? 16 : 8),
                    y: mousePosition.y - (isHovering ? 16 : 8),
                    width: isHovering ? 32 : 16,
                    height: isHovering ? 32 : 16,
                    opacity: isVisible ? 0.6 : 0,
                    scale: isVisible ? 1 : 0,
                }}
                transition={{
                    type: "spring",
                    mass: 0.3,
                    stiffness: 100,
                    damping: 10,
                }}
            />
            <motion.div
                className="fixed pointer-events-none z-50 rounded-full bg-primary"
                animate={{
                    x: mousePosition.x - (isHovering ? 3 : 4),
                    y: mousePosition.y - (isHovering ? 3 : 4),
                    width: isHovering ? 6 : 8,
                    height: isHovering ? 6 : 8,
                    opacity: isVisible ? 1 : 0,
                    scale: isVisible ? 1 : 0,
                }}
                transition={{
                    type: "spring",
                    mass: 0.1,
                    stiffness: 200,
                    damping: 10,
                }}
            />
        </>
    );
} 