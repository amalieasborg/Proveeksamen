const express = require('express');
const router = express.Router();
const Transaction = require('../models/transactionModel');
const transactionController = require('../controllers/transactionController');

// Route til visning af formularen for ny transaction
router.get('/new', (req, res) => {
    res.render('new');
});

// Route to render form for editing an existing transaction
router.get('/transaction/:id/update', async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id);
        res.render('edit', { transaction });
    } catch (err) {
        console.error("Fejl ved hentning af transaction:", err);
        res.status(500).send("Fejl ved hentning af transaction.");
    }
});

router.get('/', transactionController.getAllTransactions);
router.post('/transaction', transactionController.createTransaction);
router.post('/transaction/:id/update', transactionController.updateTransaction);
router.post('/transaction/:id/delete', transactionController.deleteTransaction);

module.exports = router
