const express = require("express");
const router = express.Router();
const Portfolio = require("../Models/PortfolioBuilder"); // Ensure folder name is "Models"

router.post("/", async (req, res) => {
    console.log("Incoming Data:", req.body);

    try {
        const { name, email, category, portfolioLink, about } = req.body;

        // NEW: Early Validation
        // If any of these fields are missing, stop immediately and tell the frontend
        if (!name || !email || !category || !portfolioLink || !about) {
            return res.status(400).json({ 
                error: "Please fill in all required fields." 
            });
        }

        const newEntry = new Portfolio({
            name, email, category, portfolioLink, about
        });

        const savedData = await newEntry.save();
        
        // Respond exactly how your React frontend expects
        res.status(200).json({ 
            message: "Form Submitted Successfully",
            receivedData: savedData.name 
        });
        
    } catch (error) {
        console.error("Database Error:", error.message);
        res.status(500).json({ 
            message: "Server Error", 
            error: error.message 
        });
    }
});

module.exports = router;