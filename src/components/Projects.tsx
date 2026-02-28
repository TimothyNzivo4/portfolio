import ProjectCard from './ProjectCard'

const imgs = [
  'https://picsum.photos/id/1011/600/360',
  'https://picsum.photos/id/1025/600/360',
  'https://picsum.photos/id/1035/600/360',
  'https://picsum.photos/id/1043/600/360',
  'https://picsum.photos/id/1050/600/360',
  'https://picsum.photos/id/1062/600/360',
]

const projects = [
  {
    title: 'Modern Dashboard',
    description: 'A clean data dashboard with realtime charts and responsive layout.',
    image: imgs[0],
    live: '#',
    repo: '#',
  },
  {
    title: 'Design System',
    description: 'A component library showcasing tokens, components and docs.',
    image: imgs[1],
    live: '#',
    repo: '#',
  },
  {
    title: 'E-commerce UI',
    description: 'A performant product listing and checkout flow.',
    image: imgs[2],
    live: '#',
    repo: '#',
  },
  {
    title: 'Collaboration App',
    description: 'Real-time collaboration features with optimistic updates.',
    image: imgs[3],
    live: '#',
    repo: '#',
  },
  {
    title: 'Portfolio Builder',
    description: 'A generator for developer portfolios with templates and hosting.',
    image: imgs[4],
    live: '#',
    repo: '#',
  },
  {
    title: 'Performance Toolkit',
    description: 'Tools and scripts to measure and optimize front-end performance.',
    image: imgs[5],
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
