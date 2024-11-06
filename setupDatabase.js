// setupDatabase.js

const sqlite3 = require('sqlite3').verbose();

// Connect to or create the SQLite database
const db = new sqlite3.Database('database.db', (err) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
  } else {
    console.log("Connected to the SQLite database.");
  }
});

// Create the products table if it doesn't exist
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    price REAL,
    category TEXT,
    image_url TEXT,
    created_at TEXT DEFAULT CURRENT_TIMESTAMP
  );
`;

db.run(createTableQuery, (err) => {
  if (err) {
    console.error("Error creating table:", err.message);
  } else {
    console.log("Products table created successfully or already exists.");
  }
});

// Close the database connection
db.close((err) => {
  if (err) {
    console.error("Error closing the database:", err.message);
  } else {
    console.log("Database connection closed.");
  }
});
