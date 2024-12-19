const logger = (req, res, next) => {
    const timestamp = new Date().toLocaleString();
    console.log(`${req.method} request for '${req.url}' timestamp: ${timestamp}`);
    next();
};

module.exports = logger;

