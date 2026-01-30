import "./App.css";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;


function App() {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    mobile: "",
    city: ""
  });
  const [email, setEmail] = useState("");
  const contactRef = useRef(null);

  useEffect(() => {
    fetch(`${API_URL}/api/projects`)
      .then(res => res.json())
      .then(setProjects)
      .catch(err => console.error(err));

    fetch(`${API_URL}/api/clients`)
      .then(res => res.json())
      .then(setClients)
      .catch(err => console.error(err));
  }, []);

  const submitContact = (e) => {
    e.preventDefault();
    fetch(`${API_URL}/api/contacts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contact)
    }).then(() => {
      alert("Contact submitted");
      setContact({ name: "", email: "", mobile: "", city: "" });
    });
  };

  const subscribe = () => {
    fetch(`${API_URL}/api/subscribers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    }).then(() => {
      alert("Subscribed");
      setEmail("");
    });
  };

  return (
    <>
      {/* NAVBAR */}
      <header className="navbar">
  <div className="logo">Trustora</div>
  <nav>
    <Link to="/">Home</Link>
    <a href="#services">Services</a>
    <a href="#projects">Projects</a>
    <a href="#clients">Testimonials</a>
    <a href="#about">About</a>

    <Link to="/admin" className="nav-btn">
      Admin
    </Link>
  </nav>
</header>


      {/* HERO */}
      <section id="home" className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <div className="hero-text">
            <h1 style={{color:"white"}}>
              Consultation,<br />Design & Marketing
            </h1>
            <p>
              We help people make confident decisions through
              transparency, strategy and trust-driven execution.
            </p>
          </div>

          <form className="hero-form" onSubmit={submitContact}>
            <h3>Get a Free Consultation</h3>
            <input
              placeholder="Full Name"
              value={contact.name}
              onChange={e => setContact({ ...contact, name: e.target.value })}
            />
            <input
              placeholder="Email Address"
              value={contact.email}
              onChange={e => setContact({ ...contact, email: e.target.value })}
            />
            <input
              placeholder="Mobile Number"
              value={contact.mobile}
              onChange={e => setContact({ ...contact, mobile: e.target.value })}
            />
            <input
              placeholder="City"
              value={contact.city}
              onChange={e => setContact({ ...contact, city: e.target.value })}
            />
            <button type="submit">Get Quick Quote</button>
          </form>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="why">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="why-grid">
          <div className="why-card">
            <h3>High ROI</h3>
            <p>
              We focus on long-term value creation, ensuring every
              recommendation delivers sustainable financial growth.
            </p>
          </div>
          <div className="why-card">
            <h3>Smart Design</h3>
            <p>
              Designs that balance aesthetics, usability and emotional
              connection with real customer needs.
            </p>
          </div>
          <div className="why-card">
            <h3>Ethical Marketing</h3>
            <p>
              Transparent strategies that attract the right audience
              without misleading promises.
            </p>
          </div>
          <div className="why-card">
            <h3>Data Driven</h3>
            <p>
              Decisions backed by research, insights and real market
              analysis.
            </p>
          </div>
          <div className="why-card">
            <h3>Client Trust</h3>
            <p>
              We build relationships, not transactions. Trust is our
              foundation.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about">
        <h2 className="section-title">About Us</h2>
        <div className="about-content">
          <div className="about-text">
            <p>Trustora was founded with a simple belief — trust creates success.</p>
            <p>We help individuals and businesses navigate decisions with clarity.</p>
            <p>Our team blends strategy, creativity and ethical thinking.</p>
            <p>Every project is approached with transparency and care.</p>
            <p>We don’t sell dreams — we deliver outcomes.</p>
          </div>
          <div className="about-images">
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" />
            <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688" />
            <img src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267" />
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects">
        <h2 className="section-title">Our Projects</h2>
        <div className="projects-grid">
          {projects.map(p => (
            <div className="project-card" key={p._id}>
              <img src={p.image} />
              <h3>{p.name}</h3>
              <p>{p.description}</p>
              <button>Read More</button>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTS */}
      <section id="clients" className="clients">
        <h2 className="section-title">Happy Clients</h2>
        <div className="clients-grid">
          {clients.map(c => (
            <div className="client-card" key={c._id}>
              <img src={c.image} />
              <p>{c.description}</p>
              <h4>{c.name}</h4>
              <small>{c.designation}</small>
            </div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}
      <section className="newsletter">
        <h2 className="section-title">Subscribe to our Newsletter</h2>
        <div className="newsletter-box">
          <input
            placeholder="Enter your email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <button onClick={subscribe}>Subscribe</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-nav">
          <p>Home</p>
          <p>Services</p>
          <p>Projects</p>
          <p>About</p>
          <p>Help</p>
          <p>Support</p>
          <p>Contact</p>
        </div>
        <p className="copy">© 2026 Trustora. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
