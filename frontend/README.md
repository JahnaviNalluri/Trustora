Trustora Frontend

This is the frontend for Trustora, a consultancy, design, and marketing platform. It is built with React and interacts with a backend API for projects, clients, contacts, and subscriptions. The admin panel allows adding and viewing projects, clients, contacts, and subscriber emails.

Table of Contents

Features

Tech Stack

Getting Started

Folder Structure

Available Scripts

Notes

Features
Public Site

Hero section with a contact form

Services section highlighting Trustora's offerings

About section with company information

Projects and clients showcase

Newsletter subscription

Admin Dashboard

Add and view projects

Add and view clients

View contact form responses

View subscribed emails

Simple navigation back to home

Tech Stack

React

React Router DOM

Fetch API for backend requests

CSS for styling (including inline styles for navbar)

Vite for development

Getting Started
Prerequisites

Node.js >= 18

npm or yarn

Installation

Clone the repository:

git clone https://github.com/yourusername/trustora-frontend.git


Navigate to the project folder:

cd trustora-frontend


Install dependencies:

npm install
# or
yarn install


Create a .env file in the root and add your backend API URL:

VITE_API_URL=https://your-backend-url.com


Start the development server:

npm run dev
# or
yarn dev


Open your browser at http://localhost:5173 (default Vite port).



Available Scripts
Command	Description
npm run dev	Start the development server
npm run build	Build the project for production
npm run preview	Preview the production build
Notes

The admin panel has a fixed navbar with a “Back to Home” link.

Inline styles are used for colors in some areas (like the navbar and hero section).

The frontend is connected to a backend API for managing projects, clients, contacts, and subscriptions