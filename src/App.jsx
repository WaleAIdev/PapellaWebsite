import React, { useState } from "react";
import "./App.css";

// Placeholder data: 50 items in 8 categories
const menuSections = [
  { title: "Appetizers", items: Array.from({ length: 6 }, (_, i) => ({ name: `Appetizer ${i+1}`, desc: "Delicious starter placeholder", price: `€${5 + i}`, image: "/img/placeholder.jpg" })) },
  { title: "Main Dishes", items: Array.from({ length: 6 }, (_, i) => ({ name: `Main Dish ${i+1}`, desc: "Hearty main placeholder", price: `€${10 + i}`, image: "/img/placeholder.jpg" })) },
  { title: "Fish", items: Array.from({ length: 6 }, (_, i) => ({ name: `Fish Dish ${i+1}`, desc: "Fresh fish placeholder", price: `€${12 + i}`, image: "/img/placeholder.jpg" })) },
  { title: "Meat", items: Array.from({ length: 6 }, (_, i) => ({ name: `Meat Dish ${i+1}`, desc: "Savory meat placeholder", price: `€${14 + i}`, image: "/img/placeholder.jpg" })) },
  { title: "Desserts", items: Array.from({ length: 6 }, (_, i) => ({ name: `Dessert ${i+1}`, desc: "Sweet dessert placeholder", price: `€${4 + i}`, image: "/img/placeholder.jpg" })) },
  { title: "Soft Drinks", items: Array.from({ length: 6 }, (_, i) => ({ name: `Drink ${i+1}`, desc: "Cool drink placeholder", price: `€${2 + i}`, image: "/img/placeholder.jpg" })) },
  { title: "Beer", items: Array.from({ length: 6 }, (_, i) => ({ name: `Beer ${i+1}`, desc: "Chilled beer placeholder", price: `€${3 + i}`, image: "/img/placeholder.jpg" })) },
  { title: "Wine", items: Array.from({ length: 8 }, (_, i) => ({ name: `Wine ${i+1}`, desc: "Fine wine placeholder", price: `€${6 + i}`, image: "/img/placeholder.jpg" })) },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-wrapper">
      {/* Sticky Header with Hamburger */}
      <header className="top-nav">
        <h1>Pepella Düsseldorf</h1>
        <nav className="desktop-nav">
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
            {menuOpen && (
              <div className="dropdown">
                {menuSections.map((sec, idx) => (
                  <a key={idx} href={`#section-${idx}`}>{sec.title}</a>
                ))}
              </div>
            )}
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-banner">
        <div className="hero-image">
          <img src="/img/chef-special.jpg" alt="Chef's Special Dish" />
          <div className="chef-special-overlay">CHEF’S SPECIAL</div>
        </div>
        <div className="hero-text">
          <h2>Discover Authentic Georgian Cuisine</h2>
          <p>Traditional flavors, modern comfort — now in Düsseldorf.</p>
        </div>
      </section>

      {/* Floating Reserve Bar */}
      <a className="floating-reserve-bar" href="https://reserve.pepella.de">Reserve a Table</a>

      {/* Menu Sections: 3 columns on desktop */}
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

      {/* About & Contact */}
      <section id="about" className="about-section">
        <h3>About Pepella</h3>
        <p>Pepella is a family-owned Georgian restaurant serving delicious, heartfelt meals made from generations-old recipes.</p>
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
