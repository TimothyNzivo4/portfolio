const sections = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  return (
    <header className="site-navbar">
      <div className="nav-inner">
        <div className="brand">My Portfolio</div>
        <nav>
          <ul>
            {sections.map((s) => (
              <li key={s.id} onClick={() => scrollTo(s.id)}>
                {s.label}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
