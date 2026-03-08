import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { PROJECTS } from '../data/projects';

export const ProjectDetail = () => {
    const { id } = useParams();
    const project = PROJECTS.find(p => p.id === id);

    if (!project) {
        return (
            <div className="h-[60vh] flex flex-col items-center justify-center text-center gap-4">
                <h2 className="text-3xl font-bold text-white">Oops, Project Not Found</h2>
                <Link to="/projects" className="text-neon hover:underline">Back to Projects</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen pb-20">
            {/* Top Navigation */}
            <div className="mb-8 pt-4">
                <Link to="/projects" className="inline-flex items-center gap-2 text-secondary hover:text-white transition group">
                    <FaArrowLeft className="group-hover:-translate-x-1 transition" /> Back to Projects
                </Link>
            </div>

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="relative w-full h-[40vh] md:h-[50vh] rounded-3xl overflow-hidden border border-white/10 mb-12 group"
            >
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-black/50 to-transparent" />

                <div className="absolute bottom-0 left-0 w-full p-8 md:p-12">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-4xl md:text-6xl font-bold text-white mb-2"
                    >
                        {project.title}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-gray-300 font-light max-w-2xl"
                    >
                        {project.tagline}
                    </motion.p>
                </div>
            </motion.div>

            {/* Content Layout (Bento Split) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* Left Column (Sticky Sidebar) - 4 Cols */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    className="lg:col-span-4 flex flex-col gap-6"
                >
                    <div className="bg-surface rounded-3xl p-8 border border-white/10 sticky top-24">
                        {/* Links */}
                        <div className="flex gap-4 mb-8">
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noreferrer"
                                className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold flex items-center justify-center gap-2 hover:bg-white/10 transition"
                            >
                                <FaGithub /> Repository
                            </a>
                        </div>

                        {/* Tech Stack */}
                        <div className="mb-8">
                            <h3 className="text-sm font-bold text-neon uppercase tracking-wider mb-4">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map(t => (
                                    <span key={t} className="px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 text-sm text-secondary">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Features */}
                        <div>
                            <h3 className="text-sm font-bold text-neon uppercase tracking-wider mb-4">Key Features</h3>
                            <ul className="space-y-3">
                                {project.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                                        <span className="w-1.5 h-1.5 rounded-full bg-neon mt-1.5 shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </motion.div>

                {/* Right Column (Main Content) - 8 Cols */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    className="lg:col-span-8"
                >
                    <div className="bg-surface rounded-3xl p-8 md:p-12 border border-white/10 min-h-[400px]">
                        <h2 className="text-3xl font-bold text-white mb-6">About this Project</h2>
                        <div className="text-gray-300 text-lg leading-relaxed space-y-6">
                            <p>{project.description}</p>

                            <p>
                                NOTE: This section uses a dedicated 8-column space to ensure readability for longer form content.
                                By separating the metadata (sidebar) from the narrative (main content), users can quickly scan constraints
                                while diving deep into the solution architecture.
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};
