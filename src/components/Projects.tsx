export default function Projects() {
    return (
        <section id="projects" className="py-20 bg-(--color-bg) text-(--color-text)">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold mb-10 text-center">
                    Meus Projetos
                </h2>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-gray-800 p-6 rounded-xl">
                        <h3 className="font-bold mb-2">ComuniShop</h3>
                        <p className="text-gray-400">
                            Plataforma estilo marketplace com Spring Boot.
                        </p>
                    </div>

                    <div className="bg-gray-800 p-6 rounded-xl">
                        <h3 className="font-bold mb-2">Portfólio</h3>
                        <p className="text-gray-400">
                            Site pessoal com React e Tailwind.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}