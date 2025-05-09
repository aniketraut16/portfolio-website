'use client';

import { useEffect, useRef } from 'react';
import { Award, Calendar, ExternalLink } from 'lucide-react';

export default function Certifications() {
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

    const certifications = [
        {
            name: "AWS Certified Solutions Architect",
            issuer: "Amazon Web Services",
            date: "June 2023",
            credentialId: "AWS-12345",
            credentialURL: "#",
        },
        {
            name: "Google Cloud Professional Developer",
            issuer: "Google Cloud",
            date: "March 2023",
            credentialId: "GCP-67890",
            credentialURL: "#",
        },
        {
            name: "Meta Frontend Developer Professional Certificate",
            issuer: "Meta (Facebook)",
            date: "January 2023",
            credentialId: "META-24680",
            credentialURL: "#",
        },
        {
            name: "Microsoft Certified: Azure Developer Associate",
            issuer: "Microsoft",
            date: "November 2022",
            credentialId: "MSFT-13579",
            credentialURL: "#",
        },
        {
            name: "TensorFlow Developer Certificate",
            issuer: "Google",
            date: "September 2022",
            credentialId: "TF-97531",
            credentialURL: "#",
        },
        {
            name: "Blockchain Developer Certification",
            issuer: "Ethereum Foundation",
            date: "July 2022",
            credentialId: "ETH-86420",
            credentialURL: "#",
        },
    ];

    return (
        <section
            id="certifications"
            ref={sectionRef}
            className="min-h-screen py-20 transition-all duration-1000 translate-y-10 opacity-0"
        >
            <div className="max-w-4xl mx-auto">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Certifications</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="glass p-6 rounded-xl flex gap-4 hover:shadow-[0_0_15px_rgba(var(--primary)/30)] transition-all"
                        >
                            <div className="flex-shrink-0">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                    <Award size={24} className="text-primary" />
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-bold mb-1">{cert.name}</h3>
                                <h4 className="text-primary font-medium mb-2">{cert.issuer}</h4>

                                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                                    <Calendar size={14} />
                                    <span>{cert.date}</span>
                                </div>

                                <div className="text-sm text-muted-foreground mb-3">
                                    Credential ID: {cert.credentialId}
                                </div>

                                <a
                                    href={cert.credentialURL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-sm text-foreground/70 hover:text-primary transition-colors"
                                >
                                    <ExternalLink size={14} />
                                    <span>Verify Certificate</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 