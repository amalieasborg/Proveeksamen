//Jeg har sat denne fil i controllers mappen, da den indeholder funktionalitet til at håndtere API-forespørgsler, der vedrører mine transactions.

const Transaction = require('../models/transactionModel');

// Tilføjer en ny transaction
exports.createTransaction = async (req, res) => {
    try {
        const newTransaction = new Transaction({
            amount: req.body.amount,
            category: req.body.category,
            dateTime: req.body.dateTime
        });
        await newTransaction.save();
        res.redirect('/');
    } catch (err) {
        console.error("Fejl ved tilføjelse af transaction:", err);
        res.status(500).send("Fejl ved tilføjelse af transaction.");
    }
};

// Henter alle transactions og viser dem
exports.getAllTransactions = async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.render('index', { transactions : transactions });
    } catch (err) {
        console.error("Fejl ved hentning af transaction:", err);
        res.status(500).send("Fejl ved hentning af transaction.");
    }
};

// Opdaterer en transaction
exports.updateTransaction = async (req, res) => {
    try {
        await Transaction.findByIdAndUpdate(req.params.id, {
            amount: req.body.amount,
            category: req.body.category,
            dateTime: req.body.dateTime
        });
        res.redirect('/');
    } catch (err) {
        console.error("Fejl ved opdatering af transaction:", err);
        res.status(500).send("Fejl ved opdatering af transaction.");
    }
};

// Sletter en transaction
exports.deleteTransaction = async (req, res) => {
    try {
        await Transaction.findByIdAndDelete(req.params.id);
        res.redirect('/');
    } catch (err) {
        console.error("Fejl ved sletning af transaction:", err);
        res.status(500).send("Fejl ved sletning af transaction.");
    }
};