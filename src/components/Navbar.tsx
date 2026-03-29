export default function Navbar() {
    return (
        <nav className="w-full p-4 bg-black text-white fixed top-0">
            <div className="max-w-6xl mx-auto flex justify-between">
                <h1 className="font-bold text-xl">Rai.dev</h1>

                <div className="space-x-6">
                    <a href="#projects" className="hover:text-blue-400">Projetos</a>
                    <a href="#contact" className="hover:text-blue-400">Contato</a>
                </div>
            </div>
        </nav>
    )
}