import { useState } from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  const menuItems = [
    { title: "Khinkali", image: "/img/khinkali.jpg", price: "€8", desc: "Traditional Georgian dumplings with spiced meat filling." },
    { title: "Khachapuri", image: "/img/khachapuri.jpg", price: "€10", desc: "Cheese-filled boat-shaped bread topped with an egg." },
    { title: "Lobio", image: "/img/lobio.jpg", price: "€7", desc: "Spiced kidney bean stew served with fresh herbs." },
  ];

  const fullMenu = [
    {
      category: "Appetizers",
      items: [
        { name: "Pkhali Trio", desc: "Spinach, beetroot and walnut paste", price: "€6" },
        { name: "Eggplant Rolls", desc: "With walnut-garlic paste", price: "€6.50" },
      ],
    },
    {
      category: "Main Dishes",
      items: [
        { name: "Khinkali", desc: "Dumplings with meat or mushrooms", price: "€8" },
        { name: "Ojakhuri", desc: "Fried pork with potatoes", price: "€11" },
        { name: "Chakhokhbili", desc: "Chicken stew with fresh herbs", price: "€10" },
      ],
    },
    {
      category: "Desserts",
      items: [
        { name: "Pelamushi", desc: "Georgian grape pudding", price: "€5" },
      ],
    },
    {
      category: "Beverages",
      items: [
        { name: "Borjomi", desc: "Georgian mineral water", price: "€2.50" },
        { name: "Saperavi Red Wine", desc: "Dry red wine", price: "€5 / glass" },
      ],
    },
  ];

  return (
    <div className="site-wrapper">
      <header className="site-header">
        <h1>Pepella Düsseldorf</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero-section">
        <h2>Authentic Georgian Cuisine</h2>
      </section>

      <section id="about" className="content-section">
        <h2>About Us</h2>
        <p>
          Pepella brings the flavors of Georgia to the heart of Düsseldorf. Enjoy traditional dishes in a cozy and elegant atmosphere inspired by Georgian heritage.
        </p>
      </section>

      <section id="menu" className="content-section dark-bg">
        <h2>Our Highlights</h2>
        <Carousel showThumbs={false} infiniteLoop autoPlay interval={4000} showStatus={false}>
          {menuItems.map((item, index) => (
            <div key={index} className="carousel-slide">
              <img src={item.image} alt={item.title} />
              <h3>{item.title} - {item.price}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </Carousel>

        <div className="full-menu">
          <h2>Full Menu</h2>
          {fullMenu.map((section, idx) => (
            <div key={idx} className="menu-section">
              <h3>{section.category}</h3>
              <ul>
                {section.items.map((item, i) => (
                  <li key={i}>
                    <div className="menu-item">
                      <div>
                        <strong>{item.name}</strong>
                        <p>{item.desc}</p>
                      </div>
                      <span>{item.price}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="content-section">
        <h2>Contact & Hours</h2>
        <p>Address: Musterstraße 123, Düsseldorf</p>
        <p>Phone: +49 123 456789</p>
        <p>Email: info@pepella.de</p>
        <p>Open: Mon-Sun 12:00–22:00</p>
        <div className="map-wrapper">
          <iframe
            src="https://www.google.com/maps/embed?..."
            width="100%"
            height="250"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <button className="floating-button" onClick={() => setShowModal(true)}>Reserve</button>

      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="modal-overlay"
        >
          <div className="modal">
            <button className="close-button" onClick={() => setShowModal(false)}>&times;</button>
            <h3>Reserve a Table</h3>
            <form className="reservation-form">
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email" required />
              <input type="tel" placeholder="Phone" required />
              <input type="datetime-local" required />
              <input type="number" placeholder="Guests" min="1" max="20" required />
              <textarea placeholder="Special requests" rows="3"></textarea>
              <button type="submit">Confirm</button>
            </form>
          </div>
        </motion.div>
      )}

      <footer className="site-footer">
        &copy; {new Date().getFullYear()} Pepella Düsseldorf | <a href="#">Impressum</a> | <a href="#">Privacy</a>
      </footer>
    </div>
  );
}

export default App;