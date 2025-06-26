import { useState } from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(false);

  const menuItems = [
    { title: "Khinkali", image: "/img/khinkali.jpg", price: "€8", desc: "Traditional Georgian dumplings." },
    { title: "Khachapuri", image: "/img/khachapuri.jpg", price: "€10", desc: "Cheese-filled bread." },
    { title: "Lobio", image: "/img/lobio.jpg", price: "€7", desc: "Bean stew with spices." },
  ];

  return (
    <div className="App">
      <header className="sticky top-0 bg-white shadow z-50 p-4 flex justify-between items-center">
        <h1 className="text-2xl font-serif">Pepella Düsseldorf</h1>
        <nav className="space-x-4">
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="relative h-[80vh] bg-cover bg-center" style={{ backgroundImage: "url('/img/restaurant.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h2 className="text-white text-4xl font-bold">Authentic Georgian Cuisine</h2>
        </div>
      </section>

      <section id="about" className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p>
          Pepella brings the flavors of Georgia to the heart of Düsseldorf. We offer authentic dishes prepared with care and served in a warm, welcoming atmosphere.
        </p>
      </section>

      <section id="menu" className="bg-gray-50 p-6">
        <h2 className="text-3xl font-bold mb-4 text-center">Our Menu</h2>
        <Carousel showThumbs={false} infiniteLoop autoPlay interval={4000} showStatus={false}>
          {menuItems.map((item, index) => (
            <div key={index} className="text-center">
              <img src={item.image} alt={item.title} className="mx-auto rounded-xl shadow-lg max-h-[400px] object-cover" />
              <h3 className="text-xl mt-4 font-semibold">{item.title} - {item.price}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </Carousel>
      </section>

      <section id="contact" className="max-w-4xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Contact & Hours</h2>
        <p>Address: Musterstraße 123, Düsseldorf</p>
        <p>Phone: +49 123 456789</p>
        <p>Email: info@pepella.de</p>
        <p>Open: Mon-Sun 12:00–22:00</p>
        <div className="mt-4">
          <iframe
            src="https://www.google.com/maps/embed?..."
            width="100%"
            height="250"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <button
        className="fixed bottom-6 right-6 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700"
        onClick={() => setShowModal(true)}
      >
        Reserve
      </button>

      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        >
          <div className="bg-white p-6 rounded-xl w-full max-w-md shadow-lg relative">
            <button className="absolute top-2 right-2" onClick={() => setShowModal(false)}>&times;</button>
            <h3 className="text-2xl font-bold mb-4">Make a Reservation</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Name" className="w-full p-2 border rounded" required />
              <input type="email" placeholder="Email" className="w-full p-2 border rounded" required />
              <input type="datetime-local" className="w-full p-2 border rounded" required />
              <textarea placeholder="Notes (optional)" className="w-full p-2 border rounded" rows="3"></textarea>
              <button type="submit" className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 w-full">Submit</button>
            </form>
          </div>
        </motion.div>
      )}

      <footer className="bg-gray-900 text-white p-4 text-center mt-6">
        &copy; {new Date().getFullYear()} Pepella Düsseldorf | <a href="#" className="underline">Impressum</a> | <a href="#" className="underline">Privacy</a>
      </footer>
    </div>
  );
}

export default App;
