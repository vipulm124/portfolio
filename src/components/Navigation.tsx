import { NavLink } from "react-router-dom";
import personalData from "../data/home.json";
import ThemeToggle from "./ThemeToggle";
import { useEffect } from "react";
import { useLocalStorage, useMediaQuery } from "usehooks-ts";

type Theme = "dark" | "light" | "system";

export default function Navigation() {
    const { name } = personalData;
    const [theme, setTheme] = useLocalStorage<Theme>("portfolio-theme", "system");
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    useEffect(() => {
        let activeTheme = theme;
        if (theme === "system") {
            activeTheme = prefersDarkMode ? "dark" : "light";
        }
        document.documentElement.setAttribute("data-theme", activeTheme);
    }, [theme, prefersDarkMode]);

    const activeLink = "text-color-primary after:w-full";
    const inactiveLink = "text-color-secondary after:w-0";
    const baseLink = "font-medium py-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-brand after:transition-all after:duration-300 hover:text-color-primary hover:after:w-full transition-colors duration-200";

    return (
        <nav className="h-[70px] flex justify-center items-center sticky top-0 bg-primary/90 backdrop-blur-md border-b border-primary z-50">
            <div className="w-full max-w-[1100px] px-8 flex justify-between items-center">
                <NavLink to="/" className="font-bold text-xl tracking-tight">
                    {name}.
                </NavLink>
                <div className="flex items-center">
                    <div className="hidden md:flex gap-8">
                        <NavLink
                            to="/"
                            className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink}`}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/resume"
                            className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink}`}
                        >
                            Resume
                        </NavLink>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink}`}
                        >
                            Projects
                        </NavLink>
                        <NavLink
                            to="/blogs"
                            className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink}`}
                        >
                            Blogs
                        </NavLink>
                    </div>
                    {/* Mobile nav items */}
                    <div className="md:hidden flex overflow-x-auto whitespace-nowrap gap-6 pb-1">
                        <NavLink
                            to="/"
                            className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink}`}
                        >
                            Home
                        </NavLink>
                        <NavLink
                            to="/resume"
                            className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink}`}
                        >
                            Resume
                        </NavLink>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink}`}
                        >
                            Projects
                        </NavLink>
                        <NavLink
                            to="/blogs"
                            className={({ isActive }) => `${baseLink} ${isActive ? activeLink : inactiveLink}`}
                        >
                            Blogs
                        </NavLink>
                    </div>
                    <ThemeToggle theme={theme} setTheme={setTheme} />
                </div>
            </div>
        </nav>
    );
}
