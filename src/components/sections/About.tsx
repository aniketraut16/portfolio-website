'use client';

import { useEffect, useRef } from 'react';

export default function About() {
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
            id="about"
            ref={sectionRef}
            className="min-h-screen py-20 transition-all duration-1000 translate-y-10 opacity-0"
        >
            <div className="max-w-4xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">About Me</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="glass p-8 rounded-2xl mb-12">
                    <p className="text-lg mb-6 leading-relaxed">
                        I'm a passionate software developer with a keen interest in building modern web applications and exploring cutting-edge technologies. With a strong foundation in both front-end and back-end development, I strive to create seamless, user-centric experiences that solve real-world problems.
                    </p>
                    <p className="text-lg mb-6 leading-relaxed">
                        My journey in technology began with a curiosity about how digital systems work, which led me to pursue formal education in computer science. Since then, I've been constantly learning and adapting to the ever-evolving tech landscape.
                    </p>
                    <p className="text-lg leading-relaxed">
                        When I'm not coding, you might find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="glass p-6 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(var(--primary)/30)] hover:-translate-y-1">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                            <span className="text-primary text-xl font-bold">1</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Problem Solver</h3>
                        <p className="text-muted-foreground">
                            I enjoy tackling complex challenges and finding elegant solutions through critical thinking and creativity.
                        </p>
                    </div>

                    <div className="glass p-6 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(var(--primary)/30)] hover:-translate-y-1">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                            <span className="text-primary text-xl font-bold">2</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Continuous Learner</h3>
                        <p className="text-muted-foreground">
                            Technology evolves rapidly, and I'm committed to staying at the forefront by continuously expanding my knowledge.
                        </p>
                    </div>

                    <div className="glass p-6 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(var(--primary)/30)] hover:-translate-y-1">
                        <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                            <span className="text-primary text-xl font-bold">3</span>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Team Player</h3>
                        <p className="text-muted-foreground">
                            I believe in the power of collaboration and enjoy working with diverse teams to achieve common goals.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
} 