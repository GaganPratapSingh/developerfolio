import { useEffect, useState } from "react";
import { navLinks, site } from "../data/portfolio";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header
      className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}
    >
      <div className="container header-inner">
        <a href="#" className="logo" onClick={closeMenu}>
          <img
            src="/logo.png"
            alt="Gagan Pratap Singh"
            width="220"
            height="60"
            style={{
              width: "400px",
              height: "110px",
              objectFit: "contain",
              display: "block",
            }}
          />
        </a>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={menuOpen}
          aria-controls="primary-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>

        <nav
          id="primary-nav"
          className={`nav ${menuOpen ? "nav--open" : ""}`}
          aria-label="Primary"
        >
          <ul className="nav-list">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a href={`#${id}`} onClick={closeMenu}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="btn btn--small nav-cta"
            onClick={closeMenu}
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
}
