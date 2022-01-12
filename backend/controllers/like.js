const sauceModels = require('../models/sauces')

exports.likeUser = (req,res,next) => {
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    console.log("je suis dans le controller LIKE");
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");

    console.log(req.body.like)

    var idSauce = req.params.id;
    var numLike = req.body.like;
    var userId = req.body.userId;

    sauceModels.findOne({_id: idSauce}).then( sauce => {

        switch(numLike){
            case -1:

                //ajouter au tableau iduser au tableau dislikes et incrémenter la variable dislike
                if(!sauce.userdisliked.includes(userId)){
                    sauce.userdisliked.push(userId);
                    sauce.dislike +=1;
                }
                break;
            case 0:
                // supprimer l'idUser des tableaux userlike et userdislikes et decrementer la variable likes ou dislikes
                break;
            case 1:
                break;
            default:
                res.status(400).json({message : "mauvais ID"})
                break;
        }
        sauceModels.updateOne({ _id: idSauce }, 
            {  
            likes: sauce.likes,
            dislikes: sauce.dislikes,
            usersLiked: sauce.usersLiked,
            usersDisliked: sauce.usersDisliked 
        })
        .then(() => res.status(200).json({ message: 'Objet modifié !'}))

    })
   

    // +1 like 
    // 0 
    // -1 like 

}