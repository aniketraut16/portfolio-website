'use client';

import { useEffect, useRef } from 'react';

export default function Skills() {
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

    const skillCategories = [
        {
            category: "Frontend Development",
            skills: [
                { name: "React", level: 90 },
                { name: "Next.js", level: 85 },
                { name: "TypeScript", level: 80 },
                { name: "Tailwind CSS", level: 90 },
                { name: "HTML/CSS", level: 95 },
            ],
        },
        {
            category: "Backend Development",
            skills: [
                { name: "Node.js", level: 85 },
                { name: "Express", level: 80 },
                { name: "Python", level: 75 },
                { name: "MongoDB", level: 70 },
                { name: "PostgreSQL", level: 65 },
            ],
        },
        {
            category: "Tools & Technologies",
            skills: [
                { name: "Git", level: 90 },
                { name: "Docker", level: 70 },
                { name: "AWS", level: 65 },
                { name: "CI/CD", level: 75 },
                { name: "GraphQL", level: 60 },
            ],
        },
    ];

    return (
        <section
            id="skills"
            ref={sectionRef}
            className="min-h-screen py-20 transition-all duration-1000 translate-y-10 opacity-0"
        >
            <div className="max-w-4xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Skills</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="glass p-6 rounded-xl">
                            <h3 className="text-xl font-bold mb-6 text-center text-primary">{category.category}</h3>
                            <div className="space-y-5">
                                {category.skills.map((skill, idx) => (
                                    <div key={idx}>
                                        <div className="flex justify-between mb-1">
                                            <span className="font-medium">{skill.name}</span>
                                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 bg-secondary rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}

                    {/* Additional Skills */}
                    <div className="md:col-span-2 glass p-6 rounded-xl mt-8">
                        <h3 className="text-xl font-bold mb-6 text-center text-primary">Other Skills</h3>
                        <div className="flex flex-wrap gap-3 justify-center">
                            {[
                                "UI/UX Design", "Responsive Design", "RESTful APIs", "Testing", "Debugging",
                                "Performance Optimization", "Agile Methodology", "Team Leadership", "Problem Solving",
                                "Technical Writing", "Figma", "Adobe XD", "Webpack", "Redux", "Jest"
                            ].map((skill, idx) => (
                                <span
                                    key={idx}
                                    className="px-4 py-2 rounded-full bg-secondary border border-primary/30 text-sm hover:border-primary hover:bg-primary/10 transition-all"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 