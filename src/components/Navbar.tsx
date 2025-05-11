'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    Home,
    User,
    GraduationCap,
    Briefcase,
    Code,
    FolderKanban,
    Award,
    Mail,
    BarChart2
} from 'lucide-react';

const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'About', href: '#about', icon: User },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Coding Stats', href: '#github-stats', icon: BarChart2 },
    { name: 'Skills', href: '#skills', icon: Code },
    { name: 'Projects', href: '#projects', icon: FolderKanban },
    { name: 'Certifications', href: '#certifications', icon: Award },
    { name: 'Contact', href: '#contact', icon: Mail },
];

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section[id]');
            const scrollPosition = window.scrollY + 100;

            sections.forEach((section) => {
                const sectionTop = (section as HTMLElement).offsetTop;
                const sectionHeight = (section as HTMLElement).offsetHeight;
                const sectionId = section.getAttribute('id') || '';

                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    setActiveSection(sectionId);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
            <nav className="glass rounded-full px-4 py-2 flex items-center gap-1 md:gap-3 animate-fade-in shadow-lg border border-primary/20">
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = activeSection === item.href.substring(1);

                    return (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={`
                relative flex flex-col items-center justify-center p-2 rounded-full transition-all duration-300
                ${isActive
                                    ? 'text-primary bg-secondary'
                                    : 'text-foreground/70 hover:text-primary hover:bg-secondary/50'
                                }
              `}
                            aria-label={item.name}
                        >
                            <Icon size={20} className={isActive ? 'animate-pulse-slow' : ''} />
                            <span className="sr-only">{item.name}</span>
                            {isActive && (
                                <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full" />
                            )}
                        </Link>
                    );
                })}
            </nav>
        </div>
    );
} 