import { useEffect, useState } from "react"

type Theme = "light" | "dark"

export function useTheme() {
    const [theme, setTheme] = useState<Theme>("light")

    useEffect(() => {
        console.log("🔄 useEffect rodou")

        const savedTheme = localStorage.getItem("theme") as Theme | null
        console.log("💾 Tema salvo:", savedTheme)

        if (savedTheme) {
            console.log("➡️ Usando tema salvo")
            setTheme(savedTheme)
            document.documentElement.classList.toggle("dark", savedTheme === "dark")
        } else {
            const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
            console.log("🖥 Prefere dark?", prefersDark)

            const initialTheme = prefersDark ? "dark" : "light"
            setTheme(initialTheme)
            document.documentElement.classList.toggle("dark", prefersDark)
        }

        console.log("📦 Classes HTML:", document.documentElement.className)
    }, [])

    const toggleTheme = () => {
        console.log("🔘 Botão clicado")

        const newTheme = theme === "dark" ? "light" : "dark"
        console.log("🎯 Novo tema:", newTheme)

        setTheme(newTheme)
        localStorage.setItem("theme", newTheme)

        document.documentElement.classList.toggle("dark", newTheme === "dark")

        console.log("📦 Classes HTML depois:", document.documentElement.className)
    }

    return { theme, toggleTheme }
}