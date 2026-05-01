const express = require("express");
const router = express.Router();
const Portfolio = require("../Models/portfoliobuilder"); 

router.post("/", async (req, res) => {
    // This will show you exactly what Postman is sending in your CMD
    console.log("Incoming Data:", req.body);

    try {
        const { name, email, category, portfolioLink, about } = req.body;

        const newEntry = new Portfolio({
            name,
            email,
            category,
            portfolioLink,
            about
        });

        const savedData = await newEntry.save();
        
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