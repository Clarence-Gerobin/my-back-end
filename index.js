const dns = require('node:dns');
dns.setDefaultResultOrder('ipv4first');

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const submitRoute = require('./API/submit'); 

const app = express();

// Middleware
app.use(cors({
    origin: "https://pupbc-front-end.vercel.app",
    methods: ["GET", "POST"],
    credentials: true
}));
app.use(express.json()); 

// Database Connection
// This uses your hardcoded link if it doesn't find a cloud environment variable
const dbURI = process.env.MONGODB_URI || "mongodb+srv://Clarence:Clarence1234@expressnode.kbrntli.mongodb.net/Portfolios?retryWrites=true&w=majority";

mongoose.connect(dbURI)
    .then(() => console.log("✅ MongoDB Connected Successfully"))
    .catch((error) => console.error("❌ MongoDB Connection Error:", error.message));

// Routes
app.get('/', (req, res) => res.send("<h1>PUPBC API IS LIVE</h1>"));
app.use("/submit", submitRoute); 

// Port Logic for Cloud Hosting
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`🚀 Server is Running on Port ${PORT}`);
});