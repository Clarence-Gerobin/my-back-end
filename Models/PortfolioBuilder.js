const mongoose = require("mongoose");

const PortfolioSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    category: { type: String, required: true },
    portfolioLink: { type: String, required: true },
    about: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Portfolio", PortfolioSchema);