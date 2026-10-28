import { useState } from 'react'
import { site } from '../data/portfolio'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Let&apos;s work together</h2>
          <p className="section-lead">
            Open to collaborations and new opportunities. Email or call me, or send a note with the
            form.
          </p>
          <a href={`mailto:${site.email}`} className="contact-email">
            {site.email}
          </a>
          <a href={`tel:${site.phone}`} className="contact-phone">
            {site.phone}
          </a>
          <p className="contact-location">{site.location}</p>
          <p className="contact-langs">
            {site.languages.map(({ name, level }) => `${name} (${level})`).join(' · ')}
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" type="text" required autoComplete="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="you@email.com"
            />
          </label>
          <label>
            Message
            <textarea
              name="message"
              rows={5}
              required
              placeholder="Tell me about your project…"
            />
          </label>
          <button type="submit" className="btn btn--primary btn--full">
            Send message
          </button>
          {submitted && (
            <p className="form-success" role="status">
              Thanks — I&apos;ll reply at {site.email}. For now this form stays on the page; use
              email for a guaranteed reach.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
