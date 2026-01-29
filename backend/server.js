const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const projectRoutes = require("./routes/projects");
const clientRoutes = require("./routes/clients");
const contactRoutes = require("./routes/contacts");
const subscriberRoutes = require("./routes/subscribers");

const app = express();

/* MIDDLEWARE */
app.use(cors());
app.use(express.json());

/* ROUTES */
app.use("/api/projects", projectRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/subscribers", subscriberRoutes);

/* MONGODB CONNECTION */
mongoose
  .connect(
    "mongodb+srv://jahnavinalluri0123_db_user:MQ1tWO0zFVZSHI6I@cluster0.4jy3lc9.mongodb.net/flipr?retryWrites=true&w=majority"
  )
  .then(() => console.log("✅ MongoDB connected"))
  .catch(err => console.error("❌ MongoDB error:", err));

/* START SERVER */
app.listen(5000, () => {
  console.log("🚀 Backend running at http://localhost:5000");
});
