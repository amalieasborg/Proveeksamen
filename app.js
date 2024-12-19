require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const morgan = require("morgan");
const budgetsRoutes = require("./routes/budgetRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const logger = require("./middlewares/logger");

const app = express();
const port = 3000;

mongoose.connect('mongodb://127.0.0.1:27017/proveeksamen', { connectTimeoutMS: 10000 })
    .then(() => console.log('MongoDB connected successfully'))
    .catch(err => console.error('MongoDB connection error:', err));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(logger)

app.use('/',transactionRoutes);


app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log('Server running on http://localhost:3000'));