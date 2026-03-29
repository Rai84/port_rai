export default function Footer() {
    return (
        <footer className="bg-(--color-bg) text-center text-gray-500 py-6 border-t-2 border-(--color-primary)">
            © {new Date().getFullYear()} Rai - Todos os direitos reservados
        </footer>
    )
}