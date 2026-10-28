import { site } from '../data/portfolio'

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Portfolio</p>
          <h1 id="hero-heading" className="hero-title">
            Hi, I&apos;m{' '}
            <span className="hero-name">{site.name.split(' ')[0]}</span>
          </h1>
          <p className="hero-role">
            {site.role} at {site.company}
          </p>
          <p className="hero-tagline">{site.tagline}</p>
          <div className="hero-actions">
            <a href="#projects" className="btn btn--primary">
              View projects
            </a>
            <a href="#contact" className="btn btn--ghost">
              Contact me
            </a>
          </div>
          <dl className="hero-meta">
            <div>
              <dt>Based in</dt>
              <dd>{site.location}</dd>
            </div>
            <div>
              <dt>Focus</dt>
              <dd>{site.focus}</dd>
            </div>
          </dl>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <div className="hero-card">
            <div className="hero-card-glow" />
            <p className="hero-card-label">Currently at Accellor</p>
            <p className="hero-card-title">Shipping product UIs and GenAI services</p>
            <ul className="hero-card-list">
              <li>React, Next.js, TypeScript</li>
              <li>Node.js, Express, Azure</li>
              <li>LangChain RAG chatbots</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
