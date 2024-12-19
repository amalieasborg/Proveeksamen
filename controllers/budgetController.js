//Jeg har sat denne fil i controllers mappen, da den indeholder funktionalitet til at håndtere API-forespørgsler, der vedrører mine budgetter.

const Budget = require('../models/budgetModel');

// Tilføjer en ny budget
exports.createBudget = async (req, res) => {
    try {
        const newBudget = new Budget({
            amount: req.body.amount,
        });
        await newBudget.save();
        res.redirect('/');
    } catch (err) {
        console.error("Fejl ved tilføjelse af budget:", err);
        res.status(500).send("Fejl ved tilføjelse af budget.");
    }
};

// Henter alle budgets og viser dem
exports.getAllBudgets = async (req, res) => {
    try {
        const budgets = await Budget.find();
        res.render('indexBudget', { budgets: budgets });
    } catch (err) {
        console.error("Fejl ved hentning af budget:", err);
        res.status(500).send("Fejl ved hentning af budget.");
    }
};