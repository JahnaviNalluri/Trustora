import { useEffect, useState } from "react";
import "./App.css";

function Admin() {
  const [projects, setProjects] = useState([]);
  const [clients, setClients] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [subs, setSubs] = useState([]);

  const [newProject, setNewProject] = useState({
    name: "",
    image: "",
    description: ""
  });

  const [newClient, setNewClient] = useState({
    name: "",
    image: "",
    description: "",
    designation: ""
  });

  /* FETCH DATA */
  const fetchAll = () => {
    fetch("http://localhost:5000/api/projects")
      .then(res => res.json())
      .then(setProjects);

    fetch("http://localhost:5000/api/clients")
      .then(res => res.json())
      .then(setClients);

    fetch("http://localhost:5000/api/contacts")
      .then(res => res.json())
      .then(setContacts);

    fetch("http://localhost:5000/api/subscribers")
      .then(res => res.json())
      .then(setSubs);
  };

  useEffect(() => {
    fetchAll();
  }, []);

  /* ADD PROJECT */
  const addProject = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/projects", {
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

  /* ADD CLIENT */
  const addClient = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/api/clients", {
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
      <h1 style={{ textAlign: "center" }}>Admin Dashboard</h1>

      {/* ADD PROJECT */}
      <h2>Add Project</h2>
      <form className="admin-form" onSubmit={addProject}>
        <input placeholder="Project Name"
          value={newProject.name}
          onChange={e => setNewProject({ ...newProject, name: e.target.value })} />
        <input placeholder="Project Image URL"
          value={newProject.image}
          onChange={e => setNewProject({ ...newProject, image: e.target.value })} />
        <textarea placeholder="Project Description"
          value={newProject.description}
          onChange={e => setNewProject({ ...newProject, description: e.target.value })} />
        <button>Add Project</button>
      </form>

      {/* ADD CLIENT */}
      <h2>Add Client</h2>
      <form className="admin-form" onSubmit={addClient}>
        <input placeholder="Client Name"
          value={newClient.name}
          onChange={e => setNewClient({ ...newClient, name: e.target.value })} />
        <input placeholder="Client Image URL"
          value={newClient.image}
          onChange={e => setNewClient({ ...newClient, image: e.target.value })} />
        <input placeholder="Designation (CEO, Developer...)"
          value={newClient.designation}
          onChange={e => setNewClient({ ...newClient, designation: e.target.value })} />
        <textarea placeholder="Client Description"
          value={newClient.description}
          onChange={e => setNewClient({ ...newClient, description: e.target.value })} />
        <button>Add Client</button>
      </form>

      {/* VIEW PROJECTS */}
      <h2>All Projects</h2>
      {projects.map(p => (
        <div className="admin-card" key={p._id}>
          <b>{p.name}</b>
          <p>{p.description}</p>
        </div>
      ))}

      {/* VIEW CLIENTS */}
      <h2>All Clients</h2>
      {clients.map(c => (
        <div className="admin-card" key={c._id}>
          <b>{c.name}</b> ({c.designation})
          <p>{c.description}</p>
        </div>
      ))}

      {/* VIEW CONTACTS */}
      <h2>Contact Form Responses</h2>
      {contacts.map(c => (
        <div className="admin-card" key={c._id}>
          <b>{c.name}</b> – {c.email}
          <p>{c.mobile}, {c.city}</p>
        </div>
      ))}

      {/* VIEW SUBSCRIBERS */}
      <h2>Subscribed Emails</h2>
      {subs.map(s => (
        <div className="admin-card" key={s._id}>
          {s.email}
        </div>
      ))}
    </div>
  );
}

export default Admin;
