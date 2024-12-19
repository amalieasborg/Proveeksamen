//Jeg har sat denne fil i models mappen, da den indeholder en model for, hvordan min transaction bliver sat op og skal se ud.

const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
    amount: { type: Number, required: true },
    category: { type: String, required: true },
    dateTime: { type: Date, required: true }
});

module.exports = mongoose.model('Transaction', transactionSchema);

