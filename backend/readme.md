Backend API – Portfolio / Business Website

A Node.js + Express backend with MongoDB for managing projects, clients, contacts, and subscribers.
Built using a clean Router → Controller → Service architecture.

🛠️ Tech Stack

Node.js

Express.js

MongoDB

Mongoose

dotenv

cors

📁 Project Structure
backend/
│
├── config/
│   └── db.js
│
├── routes/
│   ├── project.routes.js
│   ├── client.routes.js
│   ├── contact.routes.js
│   └── subscriber.routes.js
│
├── controllers/
│   ├── project.controller.js
│   ├── client.controller.js
│   ├── contact.controller.js
│   └── subscriber.controller.js
│
├── services/
│   ├── project.service.js
│   ├── client.service.js
│   ├── contact.service.js
│   └── subscriber.service.js
│
├── models/
│   ├── Project.js
│   ├── Client.js
│   ├── Contact.js
│   └── Subscriber.js
│
├── server.js
├── .env
└── package.json

⚙️ Environment Variables

Create a .env file in the root directory:

PORT=5000
MONGO_URI=your_mongodb_connection_string

📦 Installation & Setup
# Install dependencies
npm install

# Start server
npm run dev
# or
npm start


Server will run at:

http://localhost:5000

🔗 API Base URL
http://localhost:5000/api

📌 API Endpoints
📁 Projects
Method	Endpoint	Description
GET	/projects	Get all projects
POST	/projects	Add a new project

POST /projects

{
  "name": "Portfolio Website",
  "image": "https://example.com/image.png",
  "description": "Personal portfolio project"
}

👥 Clients
Method	Endpoint	Description
GET	/clients	Get all clients
POST	/clients	Add a new client
📩 Contacts
Method	Endpoint	Description
POST	/contacts	Submit contact form
GET	/contacts	Get all contacts (Admin)

POST /contacts

{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I want to work with you"
}

📬 Subscribers
Method	Endpoint	Description
POST	/subscribers	Subscribe user
GET	/subscribers	Get all subscribers (Admin)

POST /subscribers

{
  "email": "user@example.com"
}

🧪 Testing with Postman

Open Postman

Set Content-Type: application/json

Use the endpoints above

Use raw → JSON body for POST requests

🧱 Architecture Pattern

Routes → Handle endpoints

Controllers → Handle request/response

Services → Business logic & database operations

Models → Mongoose schemas

This makes the app:

Scalable

Easy to maintain

Easy to test

🚧 Future Improvements

Authentication & Authorization (Admin)

Input validation (Joi / Zod)

Pagination & filtering

Global error handler

Swagger / OpenAPI documentation

TypeScript support

📄 License

This project is licensed under the MIT License.