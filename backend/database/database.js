// importer MONGOOSE pour me connecter à la base de donnée MongoDB
const mongoose = require('mongoose');

//importer le package pour use les variables d'environnements
const dotenv = require('dotenv');


mongoose.connect('mongodb+srv://alexan:22032203@webapi.lejo3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));


  module.exports = mongoose;