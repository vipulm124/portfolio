import { Briefcase, GraduationCap, Award } from "lucide-react";
import resumeData from "../data/resume.json";

export default function Resume() {
    const { summary, experience, education, certifications, skills } = resumeData;

    const sectionTitleRef = "text-2xl font-bold mb-6 flex items-center gap-3 text-brand";
    const experienceItemClass = "relative pl-8 mb-10 border-l-2 border-primary before:content-[''] before:absolute before:-left-[6px] before:top-1.5 before:w-2.5 before:h-2.5 before:rounded-full before:bg-brand";

    return (
        <div className="max-w-[800px] mx-auto">
            <h1 className="text-4xl font-bold mb-8 tracking-tight">Resume</h1>

            <div className="border-b border-primary pb-8 mb-8">
                <p className="text-color-secondary text-lg leading-[1.8]">
                    {summary}
                </p>
            </div>

            <div className="mb-12">
                <h2 className={sectionTitleRef}>
                    <Briefcase size={24} /> Experience
                </h2>
                {experience.map((exp, index) => (
                    <div key={index} className={experienceItemClass}>
                        <h3 className="text-xl font-semibold text-color-primary">{exp.title}</h3>
                        <div className="text-color-secondary font-medium mb-1">
                            {exp.company}
                        </div>
                        <div className="text-sm text-color-muted mb-4 block">
                            {exp.startDate} - {exp.endDate}
                        </div>
                        <p className="text-color-secondary text-[15px] mb-4">
                            {exp.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                                <span key={idx} className="bg-tertiary text-color-secondary px-3 py-1 rounded-full text-xs font-medium">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            <div className="mb-12">
                <h2 className={sectionTitleRef}>
                    <GraduationCap size={24} /> Education
                </h2>
                {education.map((edu, index) => (
                    <div key={index} className={`${experienceItemClass} !mb-6`}>
                        <h3 className="text-xl font-semibold text-color-primary">{edu.degree}</h3>
                        <div className="text-color-secondary font-medium">
                            {edu.institution}
                        </div>
                        <div className="text-sm text-color-muted block">
                            Graduated: {edu.graduationDate}
                        </div>
                    </div>
                ))}
            </div>
            <div className="mb-12">
                <h2 className={sectionTitleRef}>
                    <Award size={24} /> Certifications
                </h2>
                {certifications.map((cert, index) => (
                    <div key={index} className={`${experienceItemClass} !mb-6`}>
                        <h3 className="text-xl font-semibold text-color-primary">{cert.degree}</h3>
                    </div>
                ))}
            </div>

            <div className="mb-12">
                <h2 className={sectionTitleRef}>
                    <Award size={24} /> Technical Skills
                </h2>
                <div className="flex flex-wrap gap-3">
                    {skills.map((skill, index) => (
                        <span key={index} className="bg-secondary border border-primary px-4 py-2 rounded-lg font-medium text-color-primary">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
