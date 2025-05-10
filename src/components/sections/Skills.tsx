'use client';

import { useEffect, useRef } from 'react';
import {
    SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss3,
    SiTailwindcss, SiRedux, SiStyledcomponents, SiJquery, SiVite,
    SiNodedotjs, SiExpress, SiFastapi, SiFlask, SiSocketdotio, SiJsonwebtokens,
    SiPrisma, SiSequelize, SiMongodb, SiMysql, SiPostgresql, SiMariadb,
    SiFirebase, SiVercel, SiNetlify, SiRender, SiNginx,
    SiGithubactions, SiNumpy, SiPandas, SiTensorflow,
    SiPytorch, SiKeras, SiScikitlearn, SiGit, SiGithub, SiPostman,
    SiFigma, SiInvision, SiNpm, SiPnpm, SiNodemon, SiPython, SiCplusplus,
    SiC, SiGnubash, SiDocker
} from 'react-icons/si';
import { FaAws, FaJava, FaDatabase } from 'react-icons/fa';
import { DiMaterializecss } from 'react-icons/di';

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

    // Tech stack with icons
    const techStackWithIcons = {
        "Languages Known": [
            { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
            { name: "Python", icon: <SiPython className="text-[#3670A0]" /> },
            { name: "C++", icon: <SiCplusplus className="text-[#00599C]" /> },
            { name: "Java", icon: <FaJava className="text-[#ED8B00]" /> },
            { name: "SQL", icon: <FaDatabase className="text-[#4479A1]" /> },
            { name: "C", icon: <SiC className="text-[#00599C]" /> },
            { name: "Bash Script", icon: <SiGnubash className="text-white" /> }
        ],
        "Frontend": [
            { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
            { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
            { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
            { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
            { name: "HTML5", icon: <SiHtml5 className="text-[#E34F26]" /> },
            { name: "CSS3", icon: <SiCss3 className="text-[#1572B6]" /> },
            { name: "TailwindCSS", icon: <SiTailwindcss className="text-[#38B2AC]" /> },
            { name: "Redux", icon: <SiRedux className="text-[#593D88]" /> },
            { name: "Styled Components", icon: <SiStyledcomponents className="text-[#DB7093]" /> },
            { name: "jQuery", icon: <SiJquery className="text-[#0769AD]" /> },
            { name: "Vite", icon: <SiVite className="text-[#646CFF]" /> }
        ],
        "Backend": [
            { name: "Node.js", icon: <SiNodedotjs className="text-[#6DA55F]" /> },
            { name: "Express.js", icon: <SiExpress className="text-white" /> },
            { name: "FastAPI", icon: <SiFastapi className="text-[#009688]" /> },
            { name: "Flask", icon: <SiFlask className="text-white" /> },
            { name: "Socket.io", icon: <SiSocketdotio className="text-white" /> },
            { name: "JWT", icon: <SiJsonwebtokens className="text-white" /> },
            { name: "Prisma", icon: <SiPrisma className="text-[#2D3748]" /> },
            { name: "Sequelize", icon: <SiSequelize className="text-[#52B0E7]" /> }
        ],
        "Databases": [
            { name: "MongoDB", icon: <SiMongodb className="text-[#4EA94B]" /> },
            { name: "MySQL", icon: <SiMysql className="text-[#4479A1]" /> },
            { name: "PostgreSQL", icon: <SiPostgresql className="text-[#316192]" /> },
            { name: "MariaDB", icon: <SiMariadb className="text-[#003545]" /> },
            { name: "Firebase", icon: <SiFirebase className="text-[#FFCA28]" /> }
        ],
        "DevOps & Cloud": [
            { name: "AWS", icon: <FaAws className="text-[#FF9900]" /> },
            { name: "Vercel", icon: <SiVercel className="text-white" /> },
            { name: "Netlify", icon: <SiNetlify className="text-white" /> },
            { name: "Render", icon: <SiRender className="text-[#46E3B7]" /> },
            { name: "Nginx", icon: <SiNginx className="text-[#009639]" /> },
            { name: "GitHub Actions", icon: <SiGithubactions className="text-[#2671E5]" /> }
        ],
        "Data Science": [
            { name: "NumPy", icon: <SiNumpy className="text-[#013243]" /> },
            { name: "Pandas", icon: <SiPandas className="text-[#150458]" /> },
            { name: "Matplotlib", icon: <DiMaterializecss className="text-white" /> },
            { name: "TensorFlow", icon: <SiTensorflow className="text-[#FF6F00]" /> },
            { name: "PyTorch", icon: <SiPytorch className="text-[#EE4C2C]" /> },
            { name: "Keras", icon: <SiKeras className="text-[#D00000]" /> },
            { name: "scikit-learn", icon: <SiScikitlearn className="text-[#F7931E]" /> }
        ],
        "Tools": [
            { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
            { name: "GitHub", icon: <SiGithub className="text-white" /> },
            { name: "Postman", icon: <SiPostman className="text-[#FF6C37]" /> },
            { name: "Figma", icon: <SiFigma className="text-[#F24E1E]" /> },
            { name: "Invision", icon: <SiInvision className="text-[#FF3366]" /> },
            { name: "NPM", icon: <SiNpm className="text-[#CB3837]" /> },
            { name: "PNPM", icon: <SiPnpm className="text-[#F69220]" /> },
            { name: "Nodemon", icon: <SiNodemon className="text-[#76D04B]" /> }
        ]
    };

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

                {/* Tech Stack Categories */}
                <div className="mt-16">
                    <div className="space-y-8">
                        {Object.entries(techStackWithIcons).map(([category, skills]) => (
                            <div key={category} className="glass p-6 rounded-xl">
                                <h4 className="text-lg font-bold mb-4 text-primary">{category}</h4>
                                <div className="flex flex-wrap gap-3">
                                    {skills.map((skill, idx) => (
                                        <span
                                            key={idx}
                                            className="px-4 py-2 rounded-full bg-secondary border border-primary/30 text-sm hover:border-primary hover:bg-primary/10 transition-all flex items-center gap-2"
                                        >
                                            {skill.icon}
                                            {skill.name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 