import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

const API_URL = import.meta.env.VITE_API_URL;

function Admin() {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [subs, setSubs] = useState([]);

  const [newProject, setNewProject] = useState({ name: "", image: "", description: "" });
  const [newClient, setNewClient] = useState({ name: "", image: "", description: "", designation: "" });

  const fetchAll = () => {
    fetch(`${API_URL}/api/projects`).then(res => res.json()).then(setProjects);
    fetch(`${API_URL}/api/clients`).then(res => res.json()).then(setClients);
    fetch(`${API_URL}/api/contacts`).then(res => res.json()).then(setContacts);
    fetch(`${API_URL}/api/subscribers`).then(res => res.json()).then(setSubs);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  const addProject = (e) => {
    e.preventDefault();
    fetch(`${API_URL}/api/projects`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProject)
    })
      .then(res => res.json())
      .then(() => {
        alert("Project added");
        setNewProject({ name: "", image: "", description: "" });
        fetchAll();
      });
  };

  const addClient = (e) => {
    e.preventDefault();
    fetch(`${API_URL}/api/clients`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newClient)
    })
      .then(res => res.json())
      .then(() => {
        alert("Client added");
        setNewClient({ name: "", image: "", description: "", designation: "" });
        fetchAll();
      });
  };

  return (
    <div style={{ padding: "40px" }}>
      {/* SIMPLE NAVBAR */}
      <header className="admin-navbar">
        <Link to="/" className="nav-home">← Back to Home</Link>
      </header>

      <h1 style={{ textAlign: "center" }}>Admin Dashboard</h1>

      {/* ADD PROJECT */}
      <h2>Add Project</h2>
      <form className="admin-form" onSubmit={addProject}>
        <input placeholder="Project Name" value={newProject.name} onChange={e => setNewProject({ ...newProject, name: e.target.value })} />
        <input placeholder="Project Image URL" value={newProject.image} onChange={e => setNewProject({ ...newProject, image: e.target.value })} />
        <textarea placeholder="Project Description" value={newProject.description} onChange={e => setNewProject({ ...newProject, description: e.target.value })} />
        <button>Add Project</button>
      </form>

      {/* ADD CLIENT */}
      <h2>Add Client</h2>
      <form className="admin-form" onSubmit={addClient}>
        <input placeholder="Client Name" value={newClient.name} onChange={e => setNewClient({ ...newClient, name: e.target.value })} />
        <input placeholder="Client Image URL" value={newClient.image} onChange={e => setNewClient({ ...newClient, image: e.target.value })} />
        <input placeholder="Designation" value={newClient.designation} onChange={e => setNewClient({ ...newClient, designation: e.target.value })} />
        <textarea placeholder="Client Description" value={newClient.description} onChange={e => setNewClient({ ...newClient, description: e.target.value })} />
        <button>Add Client</button>
      </form>

      {/* VIEW PROJECTS */}
      <h2 className="section-title">All Projects</h2>
      <div className="projects-grid">
        {projects.map(p => (
          <div className="project-card" key={p._id}>
            <img src={p.image} alt={p.name} />
            <h3>{p.name}</h3>
            <p>{p.description}</p>
          </div>
        ))}
      </div>

      {/* VIEW CLIENTS */}
      <h2 className="section-title">All Clients</h2>
      <div className="clients-grid">
        {clients.map(c => (
          <div className="client-card" key={c._id}>
            <img src={c.image} alt={c.name} />
            <p>{c.description}</p>
            <h4>{c.name}</h4>
            <small>{c.designation}</small>
          </div>
        ))}
      </div>

      {/* CONTACTS */}
      <h2>Contact Form Responses</h2>
      {contacts.map(c => (
        <div className="admin-card" key={c._id}>
          <b>{c.name}</b> – {c.email}
          <p>{c.mobile}, {c.city}</p>
        </div>
      ))}

      {/* SUBSCRIBERS */}
      <h2>Subscribed Emails</h2>
      {subs.map(s => (
        <div className="admin-card" key={s._id}>{s.email}</div>
      ))}
    </div>
  );
}

export default Admin;
