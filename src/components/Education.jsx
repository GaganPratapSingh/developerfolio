import { certifications, education } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Education</p>
          <h2 className="section-title">Study and certifications</h2>
        </div>
        <ul className="edu-list">
          {education.map(({ year, title, school, place }) => (
            <li key={title} className="edu-card">
              <span className="edu-year">{year}</span>
              <h3>{title}</h3>
              <p>
                {school} · {place}
              </p>
            </li>
          ))}
        </ul>
        <h3 className="edu-certs-title">Certifications</h3>
        <ul className="cert-list">
          {certifications.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
