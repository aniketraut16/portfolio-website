'use client';

import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
    const sectionRef = useRef<HTMLElement>(null);
    const [activeFilter, setActiveFilter] = useState('all');

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

    const projects = [
        {
            title: "Modern E-commerce Platform",
            description: "A full-stack e-commerce application with user authentication, product management, and payment integration.",
            image: "/placeholder.jpg",
            technologies: ["React", "Node.js", "MongoDB", "Stripe"],
            category: "web",
            demoLink: "#",
            githubLink: "#",
        },
        {
            title: "AI Image Generator",
            description: "An application that generates unique images based on text prompts using machine learning models.",
            image: "/placeholder.jpg",
            technologies: ["Python", "TensorFlow", "React", "Flask"],
            category: "ai",
            demoLink: "#",
            githubLink: "#",
        },
        {
            title: "Fitness Tracking App",
            description: "A mobile application that helps users track workouts, nutrition, and health metrics.",
            image: "/placeholder.jpg",
            technologies: ["React Native", "Firebase", "Redux", "Chart.js"],
            category: "mobile",
            demoLink: "#",
            githubLink: "#",
        },
        {
            title: "Personal Finance Dashboard",
            description: "A dashboard for tracking personal finances, expenses, and investments with data visualization.",
            image: "/placeholder.jpg",
            technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
            category: "web",
            demoLink: "#",
            githubLink: "#",
        },
        {
            title: "Smart Home IoT System",
            description: "An IoT system for controlling and monitoring smart home devices from a central dashboard.",
            image: "/placeholder.jpg",
            technologies: ["Raspberry Pi", "MQTT", "React", "Node.js"],
            category: "iot",
            demoLink: "#",
            githubLink: "#",
        },
        {
            title: "Blockchain Explorer",
            description: "A web application for exploring blockchain transactions and smart contracts.",
            image: "/placeholder.jpg",
            technologies: ["Ethereum", "Web3.js", "Next.js", "Tailwind CSS"],
            category: "blockchain",
            demoLink: "#",
            githubLink: "#",
        },
    ];

    const filters = [
        { id: 'all', label: 'All' },
        { id: 'web', label: 'Web' },
        { id: 'mobile', label: 'Mobile' },
        { id: 'ai', label: 'AI/ML' },
        { id: 'blockchain', label: 'Blockchain' },
        { id: 'iot', label: 'IoT' },
    ];

    const filteredProjects = activeFilter === 'all'
        ? projects
        : projects.filter(project => project.category === activeFilter);

    return (
        <section
            id="projects"
            ref={sectionRef}
            className="min-h-screen py-20 transition-all duration-1000 translate-y-10 opacity-0"
        >
            <div className="max-w-6xl mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">Projects</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-8"></div>

                    {/* Filter Buttons */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {filters.map((filter) => (
                            <button
                                key={filter.id}
                                onClick={() => setActiveFilter(filter.id)}
                                className={`px-4 py-2 rounded-full text-sm transition-all ${activeFilter === filter.id
                                        ? 'bg-primary text-primary-foreground'
                                        : 'bg-secondary text-foreground/70 hover:text-primary'
                                    }`}
                            >
                                {filter.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="glass rounded-xl overflow-hidden group hover:shadow-[0_0_20px_rgba(var(--primary)/30)] transition-all duration-300"
                        >
                            {/* Project Image */}
                            <div className="h-48 bg-secondary/50 relative overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center text-primary/50">
                                    Project Image
                                </div>
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                                <p className="text-muted-foreground mb-4 line-clamp-2">{project.description}</p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.technologies.map((tech, idx) => (
                                        <span key={idx} className="text-xs px-2 py-1 bg-secondary rounded-full text-primary">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div className="flex gap-4">
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-sm text-foreground/70 hover:text-primary transition-colors"
                                    >
                                        <ExternalLink size={16} />
                                        <span>Live Demo</span>
                                    </a>
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1 text-sm text-foreground/70 hover:text-primary transition-colors"
                                    >
                                        <Github size={16} />
                                        <span>Source Code</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
} 