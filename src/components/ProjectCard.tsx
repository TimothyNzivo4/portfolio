type Props = {
  title: string
  description: string
  image?: string
  live?: string
  repo?: string
}

export default function ProjectCard({ title, description, image, live, repo }: Props) {
  return (
    <article className="project-card">
      {image && <img src={image} alt={`${title} screenshot`} />}
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-links">
        {live && (
          <a href={live} target="_blank" rel="noreferrer">
            Live
          </a>
        )}
        {repo && (
          <a href={repo} target="_blank" rel="noreferrer">
            Repo
          </a>
        )}
      </div>
    </article>
  )
}
