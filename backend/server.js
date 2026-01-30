require("dotenv").config();

const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const projectRoutes = require("./routes/projectRoute");
const clientRoutes = require("./routes/clientsRoute");
const contactRoutes = require("./routes/contactRoute");
const subscriberRoutes = require("./routes/subscriberRoute");

const app = express();

/* =======================
   CONNECT DATABASE
======================= */
connectDB();

/* =======================
   MIDDLEWARE
======================= */
app.use(cors());
app.use(express.json());

/* =======================
   ROUTES
======================= */
app.use("/api/projects", projectRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/contacts", contactRoutes);
app.use("/api/subscribers", subscriberRoutes);

/* =======================
   START SERVER
======================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`);
});
