import { useTheme } from "../hooks/useTheme";

type NavbarProps = {
  activeSection: string
  onNavigate: (sectionId: string) => void
}

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "Sobre" },
  { id: "projects", label: "Projetos" },
  { id: "games", label: "Jogos" },
  { id: "contact", label: "Contato" },
]

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
        <nav className="z-10 w-full p-2 bg-(--color-bg) text-(--color-text) fixed top-0">
            <div className="mx-auto flex justify-between items-center">
              <h1 className="font-bold text-lg">
                Rai <span className="text-(--color-primary)">G</span>onçalves
              </h1>

              <div className="space-x-4 text-sm font-light">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    className={`cursor-pointer transition-colors duration-300 hover:text-(--color-primary) ${
                      activeSection === item.id ? "text-(--color-primary)" : ""
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>

              <button
                onClick={toggleTheme}
                aria-label="Alternar tema"
                className="px-2 py-1 rounded-lg 
                bg-(--color-bg)/80 backdrop-blur 
                text-(--color-text) 
                border border-white/10
                transition-all duration-300 
                shadow-[0_0_10px_rgba(0,0,0,0.3)]
                cursor-pointer">
                    {theme === "dark" ? "🌙" : "☀️"}
                </button>
            </div>
          </nav>

        <nav className="fixed top-1/2 left-2 -translate-y-1/2 bg-(--color-bg)/80 backdrop-blur p-1.5 rounded-xl shadow-xl/30">
            <div className="flex flex-col gap-5 items-center text-sm">

              <a href="https://github.com/Rai84" target="_blank" rel="noreferrer noopener" aria-label="GitHub" className="icon text-(--color-text)">
                <i className="bi bi-github"></i>
              </a>

              <a href="https://linkedin.com/in/seuusuario" target="_blank" rel="noreferrer noopener" aria-label="LinkedIn" className="icon text-(--color-text)">
                <i className="bi bi-linkedin "></i>
              </a>

              <a href="https://wa.me/5511965922155" target="_blank" rel="noreferrer noopener" aria-label="WhatsApp" className="icon text-(--color-text)">
                <i className="bi bi-whatsapp "></i>
              </a>

              <a href="mailto:melorai84@gmail.com" aria-label="E-mail" className="icon text-(--color-text)">
                <i className="bi bi-envelope "></i>
              </a>

            </div>
        </nav>
    </>
  );
}
