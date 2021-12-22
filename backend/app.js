const express = require('express');

//importation de MORGAN ( logger http)
const morgan = require('morgan');

const mongoose = require('./database/database.js');

//importation des routes 
const userRoutes = require('./routes/user');
const Thing = require('./models/thing');


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


app.post('/api/new-sauce', (req, res, next) => {
  delete req.body._id;
  const thing = new Thing({
    ...req.body
  });
  thing.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
});

app.put('/api/sauces/:id', (req, res, next) => {
  Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
});


app.delete('/api/sauces/:id', (req, res, next) => {
  Thing.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));
});









module.exports = app;