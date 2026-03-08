import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiMongodb, SiTailwindcss, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiExpress, SiGit } from 'react-icons/si';
import { ProjectCard } from '../components/ProjectCard';
import { PROJECTS } from '../data/projects'; // Import shared data

export const Home = () => {
    // Featured Projects from hardcoded data
    const featuredProjects = PROJECTS.slice(0, 2);

    // Tech Stack Icons for Marquee
    const stackIcons = [
        { Icon: SiReact, color: "text-cyan-400" },
        { Icon: SiNodedotjs, color: "text-green-600" },
        { Icon: SiMongodb, color: "text-green-500" },
        { Icon: SiTailwindcss, color: "text-cyan-300" },
        { Icon: SiTypescript, color: "text-blue-500" },
        { Icon: SiJavascript, color: "text-yellow-400" },
        { Icon: SiHtml5, color: "text-orange-500" },
        { Icon: SiCss3, color: "text-blue-500" },
        { Icon: SiExpress, color: "text-white" },
        { Icon: SiGit, color: "text-red-500" },
    ];
    // Duplicate for seamless loop
    const marqueeStack = [...stackIcons, ...stackIcons];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="h-full w-full flex flex-col md:flex-row gap-6 p-6 overflow-hidden"
        >

            {/* LEFT COLUMN (Flex Col, Full Height) */}
            <div className="w-full md:w-[40%] flex flex-col h-full gap-6 overflow-hidden">

                {/* 1. Profile Card (Flex-1 to fill space) */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-surface rounded-3xl p-8 border border-white/10 flex flex-col gap-6 shadow-2xl relative overflow-hidden group flex-1 min-h-0"
                >
                    <div className="flex flex-col items-center text-center gap-4 mt-auto mb-auto">
                        <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-neon to-green-600 flex items-center justify-center text-black font-bold text-4xl shadow-xl shadow-neon/20 shrink-0">
                            JG
                        </div>
                        <div>
                            <h1 className="text-3xl font-bold text-white tracking-tight">Joshy Garcia</h1>
                            <p className="text-secondary text-base font-medium mt-1">Full Stack Developer</p>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 mt-2">
                        {['React', 'Node.js', 'TS', 'UI/UX'].map(tag => (
                            <span key={tag} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-secondary backdrop-blur-sm">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <a href="mailto:email@example.com" className="w-full py-4 rounded-2xl bg-neon text-black font-bold flex items-center justify-center gap-2 hover:bg-white transition duration-300 shrink-0 mt-auto shadow-lg hover:shadow-neon/50">
                        <FaEnvelope /> Email Me
                    </a>
                </motion.div>

                {/* 2. Social Row (Fixed Height h-24) */}
                <div className="grid grid-cols-2 gap-6 h-24 shrink-0">
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href="https://linkedin.com/in/joshygarcia" target="_blank" rel="noreferrer"
                        className="bg-surface rounded-3xl border border-white/10 flex items-center justify-center text-secondary hover:text-white hover:bg-surfaceHighlight transition group shadow-xl h-full"
                    >
                        <FaLinkedin className="text-4xl group-hover:scale-110 transition duration-300" />
                    </motion.a>
                    <motion.a
                        whileHover={{ scale: 1.05 }}
                        href="https://github.com/joshygarcia" target="_blank" rel="noreferrer"
                        className="bg-surface rounded-3xl border border-white/10 flex items-center justify-center text-secondary hover:text-white hover:bg-surfaceHighlight transition group shadow-xl h-full"
                    >
                        <FaGithub className="text-4xl group-hover:scale-110 transition duration-300" />
                    </motion.a>
                </div>

                {/* 3. Tech Carousel (Fixed Height h-20) - Increased detailedness */}
                <div className="bg-surface/50 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden h-20 shrink-0 flex items-center shadow-xl relative w-full">
                    {/* Shadow Gradients to fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />

                    <div className="flex gap-12 w-full animate-loop-scroll">
                        {/* Duplicate content enough times to ensure loop covers screen width if needed */}
                        {[...marqueeStack, ...marqueeStack].map((item, i) => (
                            <item.Icon key={i} className={`text-4xl ${item.color} flex-shrink-0 opacity-80 hover:opacity-100 transition`} />
                        ))}
                    </div>
                </div>

            </div>

            {/* RIGHT COLUMN (Flex Col, Full Height) */}
            <div className="w-full md:w-[60%] flex flex-col h-full gap-6 overflow-hidden">

                {/* 4. About Card (Flex-[4] ~45%) */}
                <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="bg-surface rounded-3xl p-8 border border-white/10 flex flex-col justify-center shadow-2xl flex-[4] shrink-0 overflow-hidden min-h-0"
                >
                    <div className="overflow-y-auto pr-2 custom-scrollbar h-full flex flex-col justify-center">
                        <h3 className="text-2xl font-bold text-white mb-4 sticky top-0 bg-surface">About Me</h3>
                        <p className="text-secondary text-lg leading-relaxed">
                            I build <span className="text-white font-medium">pixel-perfect</span>, accessible, and performant web experiences.
                            Currently obsessed with React, Design Systems, and creating intuitive digital products
                            that live on the bleeding edge of the web. I thrive in collaborative environments and am always looking for the next challenge to solve.
                        </p>
                    </div>
                </motion.div>

                {/* 5. Projects Row (Flex-[5] ~55%) */}
                <div className="flex-[5] shrink-0 grid grid-cols-1 md:grid-cols-2 gap-6 min-h-0">
                    {featuredProjects.map((project, i) => (
                        <motion.div key={project._id || i} whileHover={{ scale: 1.02 }} className="h-full">
                            <ProjectCard project={project} className="shadow-2xl h-full" />
                        </motion.div>
                    ))}
                </div>

            </div>

        </motion.div>
    );
};
