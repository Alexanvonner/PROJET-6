// importation de bcrypt
const bcrypt = require("bcrypt");

// importation de crypto-js
const CryptoJS = require("crypto-js");


// importation models de la bdd User.js
const User = require("../models/User");



exports.signup = (req, res, next) => {
console.log("req.body");
console.log(req.body);

const emailCryptoJs = CryptoJS.AES.encrypt(req.body.email,"PRIVATE_KEY").toString();


// salt combien de fois sera executer l'algo de hashage
bcrypt.hash(req.body.password , 10)
.then((hash) => {
    // ce qui sera enregistrer dans MONGODB
    const user = new User({
    email : emailCryptoJs,
    password : hash
});
user.save()
.then(()=> res.status(201).json({message : "user create"}))
.catch((error )=> res.status(500).json({message: error}))





})
.catch((error)=> res.status(500).json({error}).send(console.log(error)));




};