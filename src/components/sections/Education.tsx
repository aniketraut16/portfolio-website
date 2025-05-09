'use client';

import { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
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

    const educationData = [
        {
            degree: "Master of Science in Computer Science",
            institution: "Example University",
            location: "City, Country",
            period: "2020 - 2022",
            description: "Specialized in Artificial Intelligence and Machine Learning. Conducted research on deep learning algorithms for computer vision applications."
        },
        {
            degree: "Bachelor of Technology in Computer Science",
            institution: "Example Institute of Technology",
            location: "City, Country",
            period: "2016 - 2020",
            description: "Focused on core computer science subjects including data structures, algorithms, database management, and web development."
        },
        {
            degree: "High School Diploma",
            institution: "Example High School",
            location: "City, Country",
            period: "2014 - 2016",
            description: "Graduated with honors in Mathematics and Computer Science."
        }
    ];

    return (
        <section
            id="education"
            ref={sectionRef}
            className="min-h-screen py-20 transition-all duration-1000 translate-y-10 opacity-0"
        >
            <div className="max-w-4xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Education</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-accent to-primary/30"></div>

                    {/* Education items */}
                    {educationData.map((item, index) => (
                        <div
                            key={index}
                            className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-12 md:text-right md:ml-auto md:mr-1/2' : 'md:pl-12 md:ml-1/2'
                                } md:w-1/2`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute top-0 left-0 md:left-auto md:right-0 transform translate-x-0 md:translate-x-1/2 -translate-y-1/4 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(var(--primary)/60)]">
                                <GraduationCap size={16} className="text-primary-foreground" />
                            </div>

                            {/* Content */}
                            <div className="glass p-6 rounded-xl hover:shadow-[0_0_15px_rgba(var(--primary)/30)] transition-all">
                                <h3 className="text-xl font-bold mb-1">{item.degree}</h3>
                                <h4 className="text-lg font-semibold text-primary mb-2">{item.institution}</h4>

                                <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        <span>{item.period}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin size={14} />
                                        <span>{item.location}</span>
                                    </div>
                                </div>

                                <p className="text-foreground/80">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 