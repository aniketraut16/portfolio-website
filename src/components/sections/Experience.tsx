'use client';

import { useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
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

    const experienceData = [
        {
            position: "Senior Software Engineer",
            company: "Tech Innovations Inc.",
            location: "City, Country",
            period: "2022 - Present",
            description: [
                "Led the development of a cloud-based analytics platform using React, Node.js, and AWS.",
                "Implemented CI/CD pipelines that reduced deployment time by 40%.",
                "Mentored junior developers and conducted code reviews to ensure code quality."
            ]
        },
        {
            position: "Software Developer",
            company: "Digital Solutions Ltd.",
            location: "City, Country",
            period: "2020 - 2022",
            description: [
                "Developed and maintained multiple web applications using modern JavaScript frameworks.",
                "Collaborated with UX designers to implement responsive and accessible user interfaces.",
                "Optimized database queries that improved application performance by 30%."
            ]
        },
        {
            position: "Web Development Intern",
            company: "StartUp Ventures",
            location: "City, Country",
            period: "2019 - 2020",
            description: [
                "Assisted in the development of company website and e-commerce platform.",
                "Created and maintained documentation for codebase and development processes.",
                "Participated in daily stand-ups and sprint planning meetings."
            ]
        }
    ];

    return (
        <section
            id="experience"
            ref={sectionRef}
            className="min-h-screen py-20 transition-all duration-1000 translate-y-10 opacity-0"
        >
            <div className="max-w-4xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Experience</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="space-y-12">
                    {experienceData.map((item, index) => (
                        <div
                            key={index}
                            className="glass p-6 rounded-xl relative hover:shadow-[0_0_15px_rgba(var(--primary)/30)] transition-all"
                        >
                            {/* Position indicator */}
                            <div className="absolute -left-4 top-6 w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_0_15px_rgba(var(--primary)/60)]">
                                <Briefcase size={16} className="text-primary-foreground" />
                            </div>

                            <div className="ml-6">
                                <h3 className="text-xl font-bold mb-1">{item.position}</h3>
                                <h4 className="text-lg font-semibold text-primary mb-2">{item.company}</h4>

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

                                <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                                    {item.description.map((point, idx) => (
                                        <li key={idx}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 