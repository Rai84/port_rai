export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-(--color-bg) text-(--color-text)">
            <h1 className="text-5xl font-bold mb-4">
                Rai Dev 🚀
            </h1>

            <p className="text-gray-400 max-w-xl">
                Desenvolvedor Full Stack focado em Java, Spring Boot e React.
            </p>

            <button className="mt-6 px-6 py-3 bg-(--color-primary) rounded-lg hover:bg-(--color-primary-hover)">
                Ver projetos
            </button>
        </section>
    )
}