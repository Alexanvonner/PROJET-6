// importation models de la bdd User.js

const User = require("../models/User");

exports.signup = (req, res, next) => {
console.log("req.body");
console.log(req.body);
const user = new User({
    email : req.body.email,
    password : req.body.password
});
console.log("contenu : USER  controllers/user.js");
console.log(user);

user.save()
.then(()=> res.status(201).json({message : "user create"}))
.catch((error )=> res.status(500).json({message: error}))


};