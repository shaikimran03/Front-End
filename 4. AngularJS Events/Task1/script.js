const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors()); // Enable CORS for Angular requests

// Create MySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "testdb"
});

db.connect(err => {
    if (err) throw err;
    console.log("MySQL Connected...");
});

// API Route to fetch data
app.get("/users", (req, res) => {
    db.query("SELECT * FROM users", (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Start Server
app.listen(3000, () => console.log("Server running on port 3000"));
