import { experience } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Experience</p>
          <h2 className="section-title">Where I&apos;ve shipped work</h2>
        </div>
        <ol className="timeline">
          {experience.map(({ role, company, location, dates, points }) => (
            <li key={`${company}-${role}`} className="timeline-item">
              <p className="timeline-dates">{dates}</p>
              <h3 className="timeline-role">{role}</h3>
              <p className="timeline-org">
                {company} · {location}
              </p>
              <ul className="timeline-points">
                {points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
