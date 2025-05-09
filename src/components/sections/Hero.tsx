'use client';

import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100');
                    entry.target.classList.remove('translate-y-10', 'opacity-0');
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            id="home"
            ref={sectionRef}
            className="min-h-screen flex flex-col justify-center items-center py-20 transition-all duration-1000 translate-y-10 opacity-0"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                    <h2 className="text-lg md:text-xl font-medium text-primary mb-2 animate-pulse-slow">
                        Hello, I'm
                    </h2>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient">
                        Aniket Raut
                    </h1>
                    <p className="text-xl md:text-2xl text-foreground/80 mb-6">
                        Software Developer & Designer
                    </p>
                    <p className="text-muted-foreground max-w-md mb-8">
                        I build exceptional digital experiences with modern technologies, focusing on creating innovative solutions to complex problems.
                    </p>
                    <div className="flex gap-4">
                        <a
                            href="#about"
                            className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium transition-all hover:shadow-[0_0_15px_rgba(var(--primary)/60)] hover:scale-105"
                        >
                            Explore
                        </a>
                        <a
                            href="#contact"
                            className="px-6 py-3 rounded-full border border-primary/50 text-foreground font-medium transition-all hover:border-primary hover:bg-primary/10"
                        >
                            Contact Me
                        </a>
                    </div>
                </div>

                <div className="order-1 md:order-2 flex justify-center">
                    <div className="relative w-64 h-64 md:w-80 md:h-80">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 to-accent/30 blur-xl animate-pulse-slow"></div>
                        <div className="relative w-full h-full rounded-full border-2 border-primary/50 overflow-hidden">
                            {/* Replace with your profile image */}
                            <div className="w-full h-full bg-secondary/50 flex items-center justify-center text-primary">
                                Profile Image
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <a href="#about" className="text-primary hover:text-accent transition-colors">
                    <ArrowDown size={24} />
                </a>
            </div>
        </section>
    );
} 