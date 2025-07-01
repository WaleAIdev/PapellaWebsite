// New App.jsx with Wolt-style layout (10 dishes)
import React, { useState } from "react";
import "./App.css";

const menuItems = [
  { name: "Khinkali", desc: "Georgian dumplings", price: "€8", image: "/img/khinkali.jpg" },
  { name: "Lobio", desc: "Stewed beans with herbs", price: "€6", image: "/img/lobio.jpg" },
  { name: "Ojakhuri", desc: "Fried pork & potatoes", price: "€11", image: "/img/ojakhuri.jpg" },
  { name: "Chakhokhbili", desc: "Chicken stew with herbs", price: "€10", image: "/img/chakhokhbili.jpg" },
  { name: "Pkhali Trio", desc: "Spinach, beetroot & walnut paste", price: "€6", image: "/img/pkhali.jpg" },
  { name: "Eggplant Rolls", desc: "Stuffed with walnut-garlic paste", price: "€6.50", image: "/img/eggplant-rolls.jpg" },
  { name: "Adjaruli Khachapuri", desc: "Cheese bread with egg", price: "€9", image: "/img/khachapuri.jpg" },
  { name: "Mtsvadi", desc: "Grilled pork skewers", price: "€12", image: "/img/mtsvadi.jpg" },
  { name: "Pelamushi", desc: "Grape pudding dessert", price: "€5", image: "/img/pelamushi.jpg" },
  { name: "Saperavi Red Wine", desc: "Dry Georgian wine", price: "€5 / glass", image: "/img/saperavi.jpg" }
];

function App() {
  const [showReserve, setShowReserve] = useState(false);

  return (
    <div className="app-wrapper">
      <header className="top-nav">
        <h1>Pepella</h1>
        <nav>
          <a href="#menu">Menu</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero-banner">
        <div className="hero-text">
          <h2>Discover Authentic Georgian Cuisine</h2>
          <p>Traditional flavors, modern comfort — now in Düsseldorf.</p>
          <button onClick={() => setShowReserve(true)}>Reserve a Table</button>
        </div>
        <div className="hero-image">
          <img src="/img/restaurant.jpg" alt="Interior of Pepella" />
        </div>
      </section>

      <section id="menu" className="menu-section">
        <h3>Our Popular Dishes</h3>
        <div className="menu-grid">
          {menuItems.map((item, index) => (
            <div className="menu-card" key={index}>
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>{item.desc}</p>
              <span>{item.price}</span>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="about-section">
        <h3>About Pepella</h3>
        <p>Pepella is a family-owned Georgian restaurant serving delicious, heartfelt meals made from generations-old recipes, in a modern yet cozy setting.</p>
      </section>

      <section id="contact" className="contact-section">
        <h3>Find Us</h3>
        <p>📍 Musterstraße 123, Düsseldorf</p>
        <p>📞 +49 123 456789</p>
        <p>📧 info@pepella.de</p>
      </section>

      <footer className="bottom-nav">
        <a href="#menu">Menu</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </footer>

      {showReserve && (
        <div className="reservation-modal">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setShowReserve(false)}>&times;</button>
            <h3>Reserve Your Table</h3>
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="datetime-local" required />
              <input type="number" placeholder="Guests" min="1" max="20" required />
              <textarea placeholder="Special requests" rows="3"></textarea>
              <button type="submit">Confirm Reservation</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
