import { projects } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Projects</p>
          <h2 className="section-title">Selected work at Accellor</h2>
          <p className="section-lead">
            Production products in real estate, semiconductor ops, healthcare admin, tenders, and
            internal GenAI.
          </p>
        </div>
        <ul className="project-grid">
          {projects.map(({ title, description, tags, featured }) => (
            <li
              key={title}
              className={`project-card ${featured ? 'project-card--featured' : ''}`}
            >
              {featured && <span className="project-badge">Featured</span>}
              <h3 className="project-title">{title}</h3>
              <p className="project-desc">{description}</p>
              <ul className="tag-list">
                {tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
