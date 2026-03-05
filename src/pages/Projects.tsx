import { Github, ExternalLink } from "lucide-react";
import projects from "../data/projects.json";

export default function Projects() {

    const cardClass = "bg-secondary border border-primary rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:border-tertiary flex flex-col h-full";
    const tagClass = "bg-tertiary text-color-secondary px-3 py-1 rounded-full text-xs font-medium";
    const linkClass = "flex items-center gap-2 text-[0.9rem] text-color-primary font-medium hover:text-brand transition-colors";

    return (
        <div>
            <h1 className="text-4xl font-bold mb-8 tracking-tight">My Projects</h1>
            <p className="text-color-secondary mb-12 text-lg max-w-[800px]">
                Here are some of the key projects I've built.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <div key={project.id} className={cardClass}>
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-[240px] object-cover border-b border-primary"
                            loading="lazy"
                        />
                        <div className="p-6 flex flex-col flex-1">
                            <h2 className="text-xl font-semibold mb-2 text-color-primary">{project.title}</h2>
                            <p className="text-color-secondary text-[0.95rem] mb-4 clip-line-3 flex-1">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.tags.map((tag, idx) => (
                                    <span key={idx} className={tagClass}>{tag}</span>
                                ))}
                            </div>

                            <div className="flex gap-4 mt-auto pt-4 border-t border-primary/50">
                                {project.codeLink && (
                                    <a
                                        href={project.codeLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={linkClass}
                                    >
                                        <Github size={18} /> Source Code
                                    </a>
                                )}
                                {project.demoLink && (
                                    <a
                                        href={project.demoLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={linkClass}
                                    >
                                        <ExternalLink size={18} /> Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
