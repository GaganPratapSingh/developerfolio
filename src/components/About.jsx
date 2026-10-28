import { about, accomplishments, highlights, site } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">About</p>
          <h2 className="section-title">{about.title}</h2>
        </div>
        <div className="about-grid">
          <div className="about-prose">
            {about.paragraphs.map((text) => (
              <p key={text}>{text}</p>
            ))}
            <p>
              Reach me at{' '}
              <a href={`mailto:${site.email}`}>{site.email}</a> or{' '}
              <a href={`tel:${site.phone}`}>{site.phone}</a>.
            </p>
            <ul className="accomplishment-list">
              {accomplishments.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <ul className="highlight-cards">
            {highlights.map(({ title, text }) => (
              <li key={title} className="highlight-card">
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
