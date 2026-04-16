import { Calendar, Eye } from "lucide-react";
import blogs from "../data/blogs.json";

export default function Blogs() {

    const cardClass = "p-6 flex flex-col h-full bg-secondary border border-primary rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] hover:border-tertiary";
    const tagClass = "bg-tertiary text-color-secondary px-3 py-1 rounded-full text-xs font-medium";
    const mediumSource = "bg-black border border-[#333] text-white";
    const csharpSource = "bg-[#ff9900] text-white";

    const SOURCE_PRIORITY = {
        "Medium": 1,
        "C# Corner": 2
    }

    const parseViews = (views) => {
        if (views.endsWith('k')) {
            return parseFloat(views.slice(0, -1)) * 1000;
        }
        return parseFloat(views) || 0;
    };

    const sortedBlogs = [...blogs].sort((a, b) => {
        const aPriority = SOURCE_PRIORITY[a.source] || 999;
        const bPriority = SOURCE_PRIORITY[b.source] || 999;
        const sourceCompare = aPriority - bPriority;
        if (sourceCompare !== 0) return sourceCompare;
        const aViews = parseViews(a.views);
        const bViews = parseViews(b.views);
        return bViews - aViews;
    });

    return (
        <div>
            <h1 className="text-4xl font-bold mb-8 tracking-tight">My Articles</h1>
            <p className="text-color-secondary mb-12 text-lg max-w-[800px]">
                I'm passionate about sharing knowledge. I regularly write technical articles focusing on software engineering
                best practices, front-end architecture, and the latest web technologies on Medium and C# Corner.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sortedBlogs.map((blog) => (
                    <div key={blog.id} className={cardClass}>
                        <div className="flex justify-between items-center text-xs text-color-muted mb-4">
                            <span className={`px-2 py-1 rounded font-semibold ${blog.source.toLowerCase().includes('medium') ? mediumSource : csharpSource}`}>
                                {blog.source}
                            </span>
                            <div className="flex gap-4">
                                <span className="flex items-center gap-1">
                                    <Calendar size={14} /> {blog.date}
                                </span>
                                <span className="flex items-center gap-1">
                                    <Eye size={14} /> {blog.views}
                                </span>
                            </div>
                        </div>

                        <a
                            href={blog.link}
                            target="_blank"
                            rel="noreferrer"
                            className="text-xl font-semibold mb-3 leading-[1.4] text-color-primary hover:text-brand"
                        >{blog.title.slice(0, 50) + '...'}</a>

                        <p className="text-color-secondary text-[0.95rem] flex-1 mb-6">{blog.description.slice(0, 100) + '...'}</p>

                        <div className="flex flex-wrap gap-2 mb-6">
                            {blog.tags.map((tag, idx) => (
                                <span key={idx} className={tagClass}>{tag}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
