// App.jsx - Updated for new requirements
import React from "react";
import "./App.css";

const menuItems = [
  { name: "Khinkali", desc: "Georgian dumplings", price: "€8", image: "/img/khinkali.jpg" },
  { name: "Lobio", desc: "Stewed beans with herbs", price: "€6", image: "/img/lobio.jpg" },
  { name: "Ojakhuri", desc: "Fried pork & potatoes", price: "€11", image: "/img/ojakhuri.jpg" },
  { name: "Chakhokhbili", desc: "Chicken stew", price: "€10", image: "/img/chakhokhbili.jpg" },
  { name: "Pkhali Trio", desc: "Spinach, beetroot & walnut paste", price: "€6", image: "/img/pkhali.jpg" },
  { name: "Eggplant Rolls", desc: "Stuffed with walnut-garlic paste", price: "€6.50", image: "/img/eggplant-rolls.jpg" },
  { name: "Adjaruli Khachapuri", desc: "Cheese bread with egg", price: "€9", image: "/img/khachapuri.jpg" },
  { name: "Mtsvadi", desc: "Grilled pork skewers", price: "€12", image: "/img/mtsvadi.jpg" },
  { name: "Pelamushi", desc: "Grape pudding dessert", price: "€5", image: "/img/pelamushi.jpg" },
  { name: "Saperavi Red Wine", desc: "Dry Georgian wine", price: "€5 / glass", image: "/img/saperavi.jpg" }
];

function App() {
  return (
    <div className="app-wrapper">
      {/* Header */}
      <header className="top-nav">
        <h1>Pepella Düsseldorf</h1>
        <nav>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      {/* Hero Section with Chef's Special overlay */}
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

      {/* Floating Reserve Button (always visible) */}
      <a
        className="floating-reserve-button"
        href="https://reserve.pepella.de"
      >
        Reserve a Table
      </a>

      {/* Menu Section */}
      <section id="menu" className="menu-section">
        <h3>Our Popular Dishes</h3>
        <div className="menu-grid">
          {menuItems.map((item, idx) => (
            <div className="menu-card" key={idx}>
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.desc}</p>
              <span>{item.price}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <h3>About Pepella</h3>
        <p>
          Pepella is a family-owned Georgian restaurant serving delicious,
          heartfelt meals made from generations-old recipes in a modern yet
          cozy setting.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h3>Find Us</h3>
        <p>📍 Musterstraße 123, Düsseldorf</p>
        <p>📞 +49 123 456789</p>
        <p>📧 info@pepella.de</p>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        &copy; {new Date().getFullYear()} Pepella Düsseldorf | Impressum | Privacy
      </footer>
    </div>
  );
}

export default App;
