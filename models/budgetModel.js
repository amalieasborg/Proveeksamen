//Jeg har sat denne fil i models mappen, da den indeholder en model for, hvordan mit budget bliver sat op og skal se ud.

const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
    amount: { type: Number, required: true },
});

module.exports = mongoose.model('Budget', budgetSchema);
