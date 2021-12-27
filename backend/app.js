const express = require('express');

//importation de MORGAN ( logger http)
const morgan = require('morgan');

const mongoose = require('./database/database.js');

const saucesRoutes = require('./routes/sauces.js')

//importation des routes 
const userRoutes = require('./routes/user');


// pour créer une application express 
const app = express();

// importation de body-parser
const bodyParser = require("body-parser");


// pour logger les requests & les responses directement dans la console 
app.use(morgan("dev"));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

// transformer en json
app.use(bodyParser.json());


app.use("/api/auth", userRoutes);

app.use('/api/sauces', saucesRoutes);

app.use('/api/new-sauce', saucesRoutes);


module.exports = app;