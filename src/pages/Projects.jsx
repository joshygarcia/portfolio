import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from '../components/ProjectCard'; // Reusing the card component
import { PROJECTS } from '../data/projects';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export const Projects = () => {
    return (
        <div className="flex flex-col gap-10 pb-20">
            <div className="text-left mt-8">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl md:text-5xl font-bold text-white mb-4"
                >
                    All Projects
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-secondary text-lg max-w-2xl"
                >
                    A collection of my work, experiments, and open-source contributions.
                    Each project represents a unique challenge and solution.
                </motion.p>
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {PROJECTS.map((project) => (
                    <motion.div key={project.id} variants={itemVariants} whileHover={{ scale: 1.02 }} className="h-full">
                        <ProjectCard project={project} className="shadow-2xl h-full min-h-[350px]" />
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};
