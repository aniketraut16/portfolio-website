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
                        Hello! I'm Aniket Raut, a pre-final year BTech student specializing in Artificial Intelligence and Machine Learning at Ramdeobaba University Nagpur. With a strong passion for technology and coding, I have developed expertise in React.js, Node.js, Express.js, MongoDB, and MySQL.
                    </p>
                    <p className="text-lg mb-6 leading-relaxed">
                        Currently, I am a Full Stack Web Developer intern at MIMAG Technologies. In this role, I have built and deployed multiple production websites, enhancing my skills in full-stack development and practical implementation. Alongside this, I serve as the Website Manager at the Blockchain RBU Chapter, where I oversee the development and management of the club's website, ensuring its functionality and user engagement.
                    </p>
                    <p className="text-lg mb-6 leading-relaxed">
                        My internship at EduSkills Foundation provided me with a solid foundation in AI and Machine Learning principles. This experience has been invaluable in enhancing my understanding of these technologies and their applications.
                    </p>
                    <p className="text-lg leading-relaxed">
                        In addition to my technical skills, I have a creative side, showcased through my interest in video editing. This unique combination allows me to approach problems with both technical precision and creative flair.
                    </p>
                    <p className="text-lg leading-relaxed">
                        I believe in the power of continuous learning and collaboration for innovation. I am always looking for new challenges to grow my skills further. Let's connect to explore opportunities to create something remarkable together!
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