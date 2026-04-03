import { useTheme } from "../hooks/useTheme"

export default function Navbar() {
    const { theme, toggleTheme } = useTheme()

    return (
        <nav className="z-10 w-full p-4 bg-(--color-bg) text-(--color-text) fixed top-0">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <h1 className="font-bold text-xl">Rai <span className="text-(--color-primary)">G</span>onçalves</h1>

                <div className="space-x-4">
                    <a href="#home" className="hover:text-(--color-primary)] transition-colors duration-300">
                        Home
                    </a>
                    <a href="#about" className="hover:text-(--color-primary)] transition-colors duration-300">
                        Sobre
                    </a>
                    <a href="#projects" className="hover:text-(--color-primary)] transition-colors duration-300">
                        Projetos
                    </a>
                    <a href="#games" className="hover:text-(--color-primary)] transition-colors duration-300">
                        Jogos
                    </a>
                    <a href="#contact" className="hover:text-(--color-primary)] transition-colors duration-300">
                        Contato
                    </a>
                </div>

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