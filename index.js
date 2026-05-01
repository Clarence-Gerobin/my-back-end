// 1. DNS Fix for MongoDB Atlas
const dns = require('node:dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const submitTalentForm = require('./API/submit'); 

const app = express();

// 2. Middleware (Must be before Routes)
app.use(cors());
app.use(express.json()); 

// 3. Database Connection
mongoose
    .connect("mongodb+srv://Clarence:Clarence1234@expressnode.kbrntli.mongodb.net/")
    .then(() => console.log("MongoDB Connected Successfully"))
    .catch((error) => console.error("MongoDB Connection Error:", error.message));

// 4. Routes
app.get('/', (req, res) => {
    res.send("<h1>SERVER IS RUNNING</h1>"); // Simplified for brevity
});

app.use("/submit", submitTalentForm); 

const PORT = 7000;
app.listen(PORT, () => {
    console.log(`Server is Running on http://localhost:${PORT}`);
});