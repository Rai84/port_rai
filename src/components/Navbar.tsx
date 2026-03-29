import { useTheme } from "../hooks/useTheme"

export default function Navbar() {
    const { theme, toggleTheme } = useTheme()

    return (
        <nav className="w-full p-4 bg-white dark:bg-black text-black dark:text-white fixed top-0">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <h1 className="font-bold text-xl">Rai.dev</h1>

                <button
                    onClick={toggleTheme}
                    className="px-3 py-2 bg-gray-200 dark:bg-gray-800 rounded-lg"
                >
                    {theme === "dark" ? "🌙" : "☀️"}
                </button>
            </div>
        </nav>
    )
}