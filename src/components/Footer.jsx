import { site } from '../data/portfolio'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {year} {site.name}. Built with React & Vite.
        </p>
        <a href="#" className="footer-top">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
