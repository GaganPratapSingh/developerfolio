import { skillGroups } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="container">
        <div className="section-head section-head--row">
          <div>
            <p className="eyebrow">Skills</p>
            <h2 className="section-title">Tools I use in production</h2>
          </div>
          <p className="section-lead">
            Front-end frameworks, Node APIs, MongoDB, Azure delivery, and LLM pipelines from
            ingestion through retrieval.
          </p>
        </div>
        <div className="skill-groups">
          {skillGroups.map(({ title, items }) => (
            <div key={title} className="skill-group">
              <h3>{title}</h3>
              <ul className="tag-list">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
