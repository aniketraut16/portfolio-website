'use client';

import { useEffect, useRef } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

interface ExperienceItem {
    position: string;
    company: string;
    location: string;
    period: string;
    logo?: string;
    description: string[];
}

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

    const experienceData: ExperienceItem[] = [
        {
            position: "Website Manager",
            company: "Blockchain RCOEM Chapter",
            location: "Nagpur, Maharashtra, India · On-site",
            period: "Oct 2023 - Present",
            logo: "https://media.licdn.com/dms/image/v2/C4D0BAQFMUqUw16hgoQ/company-logo_100_100/company-logo_100_100/0/1679226992960?e=1752105600&v=beta&t=NsldxUZ5PumQbUKcr4rRikD9gnLhpugxPIaYimHB-qE",
            description: [
                "Promoted from Technical Team Member to Website Manager in October 2024.",
                "Managing and maintaining the organization's website.",
                "Implementing new features and ensuring optimal performance.",
                "Collaborated with team members on blockchain-related projects.",
                "Developed skills in teamwork and communication."
            ]
        },
        {
            position: "Full Stack Web Developer",
            company: "MIMAG Technologies",
            location: "Nagpur, Maharashtra, India · Remote",
            period: "Mar 2024 - Present",
            logo: "https://media.licdn.com/dms/image/v2/C4E0BAQFSh_qq3_LEyg/company-logo_100_100/company-logo_100_100/0/1638945383359?e=1752105600&v=beta&t=xFhE0vPs_QcOEEdogqnksPqLWGCQpLTE2AY1-ReC3O0",
            description: [
                "Developing web applications using React.js, Node.js, and MongoDB.",
                "Working with Express.js and MySQL to build robust backend systems.",
                "Collaborating with team members to deliver high-quality software solutions."
            ]
        },
        {
            position: "Open Source Contributor",
            company: "Hacktoberfest",
            location: "Remote",
            period: "Oct 2024",
            logo: "https://media.licdn.com/dms/image/v2/D4D0BAQG7leDZ_Wo5rw/company-logo_100_100/company-logo_100_100/0/1726669676583/hacktoberfest_logo?e=1752105600&v=beta&t=SfsiRx8yHOdtlVktA4gSXhTNU3nlSGoHxXQOzd5rbSc",
            description: [
                "Contributed to open source projects during Hacktoberfest 2024.",
                "Submitted pull requests and collaborated with project maintainers.",
                "Gained experience with open source contribution workflows."
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
                                <div className="flex items-center gap-4 mb-3">
                                    {item.logo && (
                                        <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                                            <img
                                                src={item.logo}
                                                alt={`${item.company} logo`}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    )}
                                    <div>
                                        <h3 className="text-xl font-bold mb-1">{item.position}</h3>
                                        <h4 className="text-lg font-semibold text-primary mb-2">{item.company}</h4>
                                    </div>
                                </div>

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