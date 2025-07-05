// src/App.jsx
import React, { useState } from "react";
import "./App.css";
import { useMenuData } from "./hooks/useMenuData"; // if you’ve wired up the Google Sheets hook

function App() {
  const menuSections = useMenuData(); // or static data while you test

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-wrapper">
      <header className="top-nav">
        <h1>Pepella Düsseldorf</h1>
        <div className="nav-group">
          <nav className="desktop-nav">
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </div>
        </div>
        {menuOpen && (
          <div className="dropdown">
            {menuSections.map((sec, idx) => (
              <a key={idx} href={`#section-${idx}`}>
                {sec.title}
              </a>
            ))}
          </div>
        )}
      </header>

      <section className="hero-banner">
        <div className="hero-image">
          <img src="/img/chef-special.jpg" alt="Chef's Special" />
          <div className="chef-special-overlay">CHEF’S SPECIAL</div>
        </div>
        <div className="hero-text">
          <h2>Discover Authentic Georgian Cuisine</h2>
          <p>Traditional flavors, modern comfort — now in Düsseldorf.</p>
        </div>
      </section>

      <a className="floating-reserve-bar" href="https://reserve.pepella.de">
        Reserve a Table
      </a>

      {menuSections.map((sec, idx) => (
        <section key={idx} id={`section-${idx}`} className="menu-section">
          <h3>{sec.title}</h3>
          <div className="menu-grid">
            {sec.items.map((item, i) => (
              <div className="menu-card horizontal" key={i}>
                <div className="card-info">
                  <h4>{item.name}</h4>
                  <span>{item.price}</span>
                  <p>{item.desc}</p>
                </div>
                <img src={item.image} alt={item.name} />
              </div>
            ))}
          </div>
        </section>
      ))}

      <section id="about" className="about-section">
        <h3>About Pepella</h3>
        <p>
          Pepella is a family-owned Georgian restaurant serving delicious,
          heartfelt meals from generations-old recipes.
        </p>
      </section>

      <section id="contact" className="contact-section">
        <h3>Find Us</h3>
        <p>📍 Musterstraße 123, Düsseldorf</p>
        <p>📞 +49 123 456789</p>
        <p>📧 info@pepella.de</p>
      </section>

      <footer className="site-footer">
        &copy; {new Date().getFullYear()} Pepella Düsseldorf | Impressum | Privacy
      </footer>
    </div>
  );
}

export default App;
