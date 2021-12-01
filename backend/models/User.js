// importation de mongoose
const mongoose = require("mongoose");


// le modèle de base de donnée pour le signup 
const userSchema = mongoose.Schema({
    email : {type : String , required: true , unique : true},
    password : { type: String, required : true}
});



module.exports =  mongoose.model("user", userSchema);