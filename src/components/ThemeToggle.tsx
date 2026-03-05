import { Sun, Moon, Laptop } from "lucide-react";

type Theme = "dark" | "light" | "system";

interface ThemeToggleProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

export default function ThemeToggle({ theme, setTheme }: ThemeToggleProps) {
    const activeClass = "bg-secondary text-brand shadow-sm";
    const baseClass = "bg-transparent border-none text-color-muted cursor-pointer p-2 rounded-full flex items-center justify-center transition-all duration-200 hover:text-color-primary";

    return (
        <div className="flex bg-tertiary rounded-full p-1 gap-1 ml-4 items-center">
            <button
                className={`${baseClass} ${theme === "light" ? activeClass : ""}`}
                onClick={() => setTheme("light")}
                title="Light Mode"
            >
                <Sun size={16} />
            </button>
            <button
                className={`${baseClass} ${theme === "dark" ? activeClass : ""}`}
                onClick={() => setTheme("dark")}
                title="Dark Mode"
            >
                <Moon size={16} />
            </button>
            <button
                className={`${baseClass} ${theme === "system" ? activeClass : ""}`}
                onClick={() => setTheme("system")}
                title="System Preference"
            >
                <Laptop size={16} />
            </button>
        </div>
    );
}
