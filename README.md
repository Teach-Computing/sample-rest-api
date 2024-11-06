# Product Catalog API

This is a simple REST API built with Node.js and SQLite for managing a product catalog. The API supports CRUD operations for products, with each product including details like name, description, price, category, and an image upload feature.

## Features

- **Create** a new product with name, description, price, category, and image
- **Retrieve** all products or a single product by ID
- **Update** a product's details and image
- **Delete** a product
- **Serve static images** to view product images directly

## Technologies Used

- **Node.js** with **Express** for the server and routing
- **SQLite** for the database
- **Multer** for handling image uploads

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) and npm installed on your machine

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Teach-Computing/sample-rest-api.git
   cd sample-rest-api
2. Install dependencies:
   ```bash
   npm install
3. Install the sqlite3 library:
   ```bash
   npm install sqlite3

5. Create a JavaScript file (e.g., setupDatabase.js) to set up the database:
   


