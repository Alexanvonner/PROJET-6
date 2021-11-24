const express = require('express');

//importation de MORGAN ( logger http)
const morgan = require('morgan');

const mongoose = require('./database/database.js')

const app = express();

// pour logger les requests & les responses directement dans la console 
app.use(morgan("dev"));

app.use((req, res, next) => {
  console.log('Requête reçue !');
  next();
});

app.use((req, res, next) => {
  res.status(201);
  next();
});

app.use((req, res, next) => {
  res.json({ message: 'Votre requête a bien été reçue !' });
  next();
});

app.use((req, res, next) => {
  console.log('Réponse envoyée avec succès !');
});

module.exports = app;