export default function Hero() {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center text-center bg-black text-white">
            <h1 className="text-5xl font-bold mb-4">
                Rai Dev 🚀
            </h1>

            <p className="text-gray-400 max-w-xl">
                Desenvolvedor Full Stack focado em Java, Spring Boot e React.
            </p>

            <button className="mt-6 px-6 py-3 bg-blue-500 rounded-lg hover:bg-blue-600 transition">
                Ver projetos
            </button>
        </section>
    )
}