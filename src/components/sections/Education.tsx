'use client';

import { useEffect, useRef } from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { Timeline, TimelineEntry } from '@/components/ui/timeline';

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

    const educationData: TimelineEntry[] = [
        {
            title: "2020 - Present",
            content: (
                <div className="glass p-6 rounded-xl hover:shadow-[0_0_15px_rgba(var(--primary)/30)] transition-all">
                    <h3 className="text-xl font-bold mb-1">BTech in Artificial Intelligence and Machine Learning</h3>
                    <h4 className="text-lg font-semibold text-primary mb-2">Ramdeobaba University</h4>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>2020 - Present</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>Nagpur, India</span>
                        </div>
                    </div>

                    <p className="text-foreground/80">
                        Currently in pre-final year, specializing in AI & ML technologies. Actively involved in various technical projects and extracurricular activities.
                    </p>
                </div>
            )
        },
        {
            title: "2018 - 2020",
            content: (
                <div className="glass p-6 rounded-xl hover:shadow-[0_0_15px_rgba(var(--primary)/30)] transition-all">
                    <h3 className="text-xl font-bold mb-1">Higher Secondary Education</h3>
                    <h4 className="text-lg font-semibold text-primary mb-2">High School</h4>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>2018 - 2020</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>Nagpur, India</span>
                        </div>
                    </div>

                    <p className="text-foreground/80">
                        Completed higher secondary education with focus on Science and Mathematics.
                    </p>
                </div>
            )
        },
        {
            title: "2016 - 2018",
            content: (
                <div className="glass p-6 rounded-xl hover:shadow-[0_0_15px_rgba(var(--primary)/30)] transition-all">
                    <h3 className="text-xl font-bold mb-1">Secondary Education</h3>
                    <h4 className="text-lg font-semibold text-primary mb-2">Secondary School</h4>

                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>2016 - 2018</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>Nagpur, India</span>
                        </div>
                    </div>

                    <p className="text-foreground/80">
                        Completed secondary education with excellent academic performance.
                    </p>
                </div>
            )
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
                    <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
                        My academic journey that has shaped my knowledge and skills in technology and development.
                    </p>
                </div>

                <Timeline data={educationData} />
            </div>
        </section>
    );
} 