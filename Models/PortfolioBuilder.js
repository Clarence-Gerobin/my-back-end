const mongoose = require("mongoose");

const PortfolioSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true },
    category: { type: String, required: true },
    portfolioLink: { type: String, required: true, trim: true },
    about: { type: String, required: true, trim: true },
    date: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Portfolio", PortfolioSchema);