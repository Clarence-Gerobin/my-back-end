// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const http = require('http');
const submitTalentForm = require('./API/submit'); 

// Initialize App
const app = express();
const server = http.createServer(app); 

// Middleware
app.use(cors({
  origin: "https://pupbc-front-end.vercel.app", // Your actual Vercel URL
  methods: ["POST", "GET"],
  credentials: true
}));

// Database Connection
const dbURI = process.env.MONGODB_URI || "mongodb+srv://Clarence:Clarence1234@expressnode.kbrntli.mongodb.net/";

mongoose
    .connect(dbURI)
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch((error) => console.error("MongoDB Connection Error:", error.message));

// Routes
app.get('/', (req, res) => {
    res.send("<h1>SERVER IS RUNNING IN AZURE</h1>");
});

app.use("/submit", submitTalentForm); 

// Server Initialization
const PORT = process.env.PORT || 7000;

server.listen(PORT, () => {
    console.log(`Server is Running on Port ${PORT}`);
});