exports.validateTransaction = (req, res, next) => {
    const { amount, category,date  } = req.body;
    if (!amount || !category || !date) {
        return res.status(400).json({ error: 'Ufuldstændige oplysninger. Alle er påkrævet.' });
    }
    next();
};

exports.validateBudget = (req, res, next) => {
    const { amount } = req.body;
    if (!amount) {
        return res.status(400).json({ error: 'Ufuldstændige oplysninger. Alle er påkrævet.' });
    }
    next();
};