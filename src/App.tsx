import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./components/Home"
import About from "./components/About"
import Projects from "./components/Projects"
import Games from "./components/Games"
import Contact from "./components/Contact"

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Games />
      <Contact />
      <Footer />
    </>
  )
}