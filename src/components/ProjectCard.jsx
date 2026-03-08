import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export const ProjectCard = ({ project, className }) => {
    // Fallback if project is missing (defensive)
    if (!project) return null;

    // Use placeholder image if no image provided (for now)
    const imageSrc = project.image || `https://picsum.photos/seed/${project.id || 'default'}/600/400`;

    return (
        <Link
            to={`/projects/${project.id}`}
            className={`group relative block w-full h-full min-h-[300px] rounded-3xl overflow-hidden border border-white/10 ${className}`}
        >
            {/* Full Bleed Image (Default State) */}
            <div className="absolute inset-0">
                <img
                    src={imageSrc}
                    alt={project.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
            </div>

            {/* Hover Overlay (Reveal State) */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-end p-8 backdrop-blur-sm">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition duration-300">
                    <span className="text-neon text-xs font-bold uppercase tracking-wider mb-2 block">
                        Case Study
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm line-clamp-2 mb-6">
                        {project.description}
                    </p>
                    <button className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all duration-300">
                        View Case Study <FaArrowRight className="text-neon" />
                    </button>
                </div>
            </div>
        </Link>
    );
};
