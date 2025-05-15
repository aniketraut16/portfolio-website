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
            name: "Build Basic Generative Adversarial Networks (GANs)",
            issuer: "DeepLearning.AI",
            date: "Mar 2025",
            credentialId: "WAMD3SUT40K8",
            credentialURL: "https://www.coursera.org/account/accomplishments/verify/WAMD3SUT40K8",
            skills: "Generative AI"
        },
        {
            name: "Build Better Generative Adversarial Networks (GANs)",
            issuer: "DeepLearning.AI",
            date: "Mar 2025",
            credentialId: "30WHTO5M8VKG",
            credentialURL: "https://www.coursera.org/account/accomplishments/verify/30WHTO5M8VKG",
            skills: "Generative AI"
        },
        {
            name: "Tailwind Basics",
            issuer: "Scrimba",
            date: "Feb 2025",
            credentialId: "RDZ9IOAHV4R6",
            credentialURL: "https://www.coursera.org/account/accomplishments/verify/RDZ9IOAHV4R6",
            skills: "Tailwind CSS"
        },
        {
            name: "English for IT",
            issuer: "Cisco Networking Academy",
            date: "Dec 2024",
            credentialId: "34626111-ee2a-4853-9a78-d2394a2b90de",
            credentialURL: "https://www.credly.com/badges/34626111-ee2a-4853-9a78-d2394a2b90de/public_url",
            skills: "English"
        },
        {
            name: "Fundamentals of Cybersecurity (EDU-102)",
            issuer: "Zscaler",
            date: "Dec 2024 · Expires Dec 2026",
            credentialId: "mvq33hh8v4pp",
            credentialURL: "https://verify.skilljar.com/c/mvq33hh8v4pp",
            skills: ""
        },
        {
            name: "Generative AI: Tools, Techniques and Applications",
            issuer: "Ramdeobaba University (RBU) Nagpur",
            date: "Dec 2024",
            credentialId: "",
            credentialURL: "https://drive.google.com/file/d/1yrA_eyz2wt7pGkUNr190gNmLiVLquuHb/view",
            skills: "Generative AI"
        },
        {
            name: "Networking Basics",
            issuer: "Cisco Networking Academy",
            date: "Dec 2024",
            credentialId: "647046fb-929a-4243-aaf9-2f3e414b5578",
            credentialURL: "https://www.credly.com/badges/647046fb-929a-4243-aaf9-2f3e414b5578/public_url",
            skills: "Computer Networking"
        },
        {
            name: "Django Web Framework",
            issuer: "Coursera",
            date: "Nov 2024",
            credentialId: "RK2U5JD8H4LP",
            credentialURL: "https://www.coursera.org/account/accomplishments/verify/RK2U5JD8H4LP",
            skills: "Django"
        },
        {
            name: "Tata Group - Data Visualisation: Empowering Business with Effective Insights Job Simulation",
            issuer: "Forage",
            date: "Nov 2024",
            credentialId: "ea3auxRbZofRra7Kf",
            credentialURL: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_EymqT7YjgXE6Li9fr_1732188699958_completion_certificate.pdf",
            skills: ""
        },
        {
            name: "Learn TypeScript",
            issuer: "Scrimba",
            date: "Oct 2024",
            credentialId: "MS4BCHZK9S0B",
            credentialURL: "https://www.coursera.org/account/accomplishments/verify/MS4BCHZK9S0B",
            skills: "TypeScript"
        },
        {
            name: "Back-end Application Development with Node.js and Express",
            issuer: "edX",
            date: "May 2024",
            credentialId: "05e30f2cd5f2492ca2a1a8e99bcd19dc",
            credentialURL: "#",
            skills: "Express.js · Node.js"
        },
        {
            name: "Introduction to Cloud Computing",
            issuer: "edX",
            date: "May 2024",
            credentialId: "3e46350dcc374370821744a85b76c989",
            credentialURL: "https://courses.edx.org/certificates/05e30f2cd5f2492ca2a1a8e99bcd19dc",
            skills: ""
        },
        {
            name: "Introduction to Cloud Native, DevOps, Agile, and NoSQL",
            issuer: "edX",
            date: "May 2024",
            credentialId: "333e44d3391b4659b093576901a17fe5",
            credentialURL: "https://courses.edx.org/certificates/333e44d3391b4659b093576901a17fe5",
            skills: ""
        },
        {
            name: "Introduction to Web Development with HTML5, CSS3, and JavaScript",
            issuer: "edX",
            date: "May 2024",
            credentialId: "56c23aba3ae2482699b8bf08326bf81c",
            credentialURL: "https://courses.edx.org/certificates/56c23aba3ae2482699b8bf08326bf81c",
            skills: "Cascading Style Sheets (CSS) · JavaScript · HTML5"
        },
        {
            name: "Introduction to Jenkins",
            issuer: "The Linux Foundation",
            date: "Apr 2024",
            credentialId: "c02d57aa5ba64a7e8aae8f1a9d478835",
            credentialURL: "https://courses.edx.org/certificates/c02d57aa5ba64a7e8aae8f1a9d478835",
            skills: ""
        },
        {
            name: "Introduction to Linux",
            issuer: "The Linux Foundation",
            date: "Apr 2024",
            credentialId: "8b17a0111c464bf790080ae3bd4bc7e9",
            credentialURL: "https://courses.edx.org/certificates/8b17a0111c464bf790080ae3bd4bc7e9",
            skills: "Linux"
        },
        {
            name: "Blockchain: Understanding Its Uses and Implications",
            issuer: "The Linux Foundation",
            date: "Dec 2023",
            credentialId: "59b418d94f7e49a89c6e53d84ad033fe",
            credentialURL: "https://courses.edx.org/certificates/59b418d94f7e49a89c6e53d84ad033fe",
            skills: "Blockchain"
        },
        {
            name: "Frontend Development using React",
            issuer: "Board Infinity",
            date: "Nov 2023",
            credentialId: "GK6SYMQF2S6C",
            credentialURL: "https://www.coursera.org/account/accomplishments/verify/GK6SYMQF2S6C",
            skills: "React.js"
        },
        {
            name: "Complete Python Developer",
            issuer: "Udemy",
            date: "Mar 2023",
            credentialId: "UC-51b084f7-880a-4c2d-8d88-5f8a11e5d3fa",
            credentialURL: "https://www.udemy.com/certificate/UC-51b084f7-880a-4c2d-8d88-5f8a11e5d3fa/",
            skills: "Python (Programming Language)"
        }
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

                                {cert.credentialId && (
                                    <div className="text-sm text-muted-foreground mb-3">
                                        Credential ID: {cert.credentialId}
                                    </div>
                                )}

                                {cert.skills && (
                                    <div className="text-sm text-muted-foreground mb-3">
                                        Skills: {cert.skills}
                                    </div>
                                )}

                                <a
                                    href={cert.credentialURL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-sm text-foreground/70 hover:text-primary transition-colors"
                                >
                                    <ExternalLink size={14} />
                                    <span>Show Certificate</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 