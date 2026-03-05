import { Link } from "react-router-dom";
import { Github, Linkedin, Twitter, ArrowRight, Download, Mail } from "lucide-react";
import personalData from "../data/home.json";

export default function Home() {
    const { name, role, tagline, about, social, imageUrl, email } = personalData;

    const btnPrimary = "inline-flex items-center gap-2 px-6 py-3 bg-brand text-white rounded-md font-medium transition-all duration-200 hover:bg-brand-hover hover:-translate-y-[1px]";
    const btnOutline = "inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-primary text-color-primary rounded-md font-medium transition-all duration-200 hover:bg-secondary hover:-translate-y-[1px]";
    const socialTag = "bg-tertiary text-color-secondary px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 cursor-pointer transition-colors hover:text-color-primary";

    return (
        <div className="flex flex-col-reverse md:flex-row items-center gap-16 min-h-[calc(100vh-70px-6rem)] mt-8 md:mt-0 text-center md:text-left">
            <div className="flex-1">
                <span className="text-brand font-semibold mb-2 block">Hi, I'm</span>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4 tracking-tight">{name}</h1>
                <h2 className="text-2xl md:text-3xl text-color-secondary mb-8">{role}</h2>
                <p className="text-color-muted text-lg max-w-[600px] mb-4 mx-auto md:mx-0">
                    {tagline}
                </p>
                <p className="text-color-muted text-base max-w-[600px] mb-10 mx-auto md:mx-0">
                    {about}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Link to="/projects" className={btnPrimary}>
                        See My Work <ArrowRight size={18} />
                    </Link>
                    <Link to="/resume" className={btnOutline}>
                        Resume <Download size={18} />
                    </Link>
                </div>

                <div className="flex flex-wrap gap-3 mt-10 justify-center md:justify-start">
                    <a href={social.github} target="_blank" rel="noreferrer" className={socialTag}>
                        <Github size={16} /> GitHub
                    </a>
                    <a href={social.linkedin} target="_blank" rel="noreferrer" className={socialTag}>
                        <Linkedin size={16} /> LinkedIn
                    </a>
                    <a href={social.twitter} target="_blank" rel="noreferrer" className={socialTag}>
                        <Twitter size={16} /> Twitter
                    </a>
                    <a href={`mailto:${email}`} className={socialTag}>
                        <Mail size={16} /> Email
                    </a>
                </div>
            </div>
            <div className="flex-1 flex justify-center w-full">
                <img
                    src={imageUrl}
                    alt={`${name} portrait`}
                    className="w-full max-w-[320px] md:max-w-[400px] aspect-square object-cover rounded-3xl shadow-[0_20px_40px_-20px_rgba(0,0,0,0.5)] border border-primary"
                />
            </div>
        </div>
    );
}
