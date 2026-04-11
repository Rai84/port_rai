import { useEffect, useRef, useState } from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Games from "./components/Games"
import Contact from "./components/Contact"

const slides = [
  { id: "home", label: "Home", content: <Home /> },
  { id: "about", label: "Sobre", content: <About /> },
  { id: "projects", label: "Projetos", content: <Projects /> },
  { id: "games", label: "Jogos", content: <Games /> },
  { id: "contact", label: "Contato", content: <Contact /> },
  { id: "footer", label: "Rodape", content: <Footer /> },
]

export default function App() {
  const deckRef = useRef<HTMLElement | null>(null)
  const [activeSlide, setActiveSlide] = useState(0)
  const activeNavSection = slides[Math.min(activeSlide, 4)]?.id ?? "home"

  useEffect(() => {
    const deck = deckRef.current

    if (!deck) {
      return
    }

    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
        return
      }

      event.preventDefault()
      deck.scrollBy({
        left: event.deltaY,
        behavior: "smooth",
      })
    }

    const handleScroll = () => {
      const slideWidth = deck.clientWidth || 1
      const nextSlide = Math.round(deck.scrollLeft / slideWidth)
      setActiveSlide(nextSlide)
    }

    deck.addEventListener("wheel", handleWheel, { passive: false })
    deck.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      deck.removeEventListener("wheel", handleWheel)
      deck.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToSlide = (index: number) => {
    const deck = deckRef.current

    if (!deck) {
      return
    }

    deck.scrollTo({
      left: deck.clientWidth * index,
      behavior: "smooth",
    })
  }

  const scrollToSection = (sectionId: string) => {
    const targetIndex = slides.findIndex((slide) => slide.id === sectionId)

    if (targetIndex === -1) {
      return
    }

    scrollToSlide(targetIndex)
  }

  return (
    <>
      <Navbar activeSection={activeNavSection} onNavigate={scrollToSection} />
      <aside className="slide-indicator" aria-label="Indicador de páginas">
        {slides.map((slide, index) => {
          const isActive = index === activeSlide

          return (
            <button
              key={slide.id}
              type="button"
              onClick={() => scrollToSlide(index)}
              className={`slide-indicator-item${isActive ? " is-active" : ""}`}
              aria-label={`Ir para ${slide.label}`}
              aria-current={isActive ? "page" : undefined}
            >
              <span className="slide-indicator-dot" />
            </button>
          )
        })}
      </aside>

      <main ref={deckRef} className="horizontal-deck">
        {slides.map((slide) => (
          <section
            key={slide.id}
            id={slide.id}
            className={`horizontal-slide${slide.id === "footer" ? " horizontal-slide-footer" : ""}`}
          >
            {slide.content}
          </section>
        ))}
      </main>
    </>
  )
}
