import ProjectCard from './ProjectCard'

const projects = [
  {
    title: 'Example Project A',
    description: 'A small project demonstrating X and Y.',
    image: undefined,
    live: '#',
    repo: '#',
  },
  {
    title: 'Example Project B',
    description: 'Another project showing Z and performance optimizations.',
    image: undefined,
    live: '#',
    repo: '#',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}
