const Sauces =  require('../models/sauces');


exports.createSauces = (req, res, next) => {
  delete req.body._id;
  const sauce = new Sauces({
    ...req.body
  });
  sauce.save()
    .then(() => res.status(201).json({ message: 'Objet enregistré !'}))
    .catch(error => res.status(400).json({ error }));
};



exports.getSauces = (req, res, next) => {
  Sauces.find()
    .then(sauces => res.status(200).json(thing))
    .catch(error => res.status(404).json({ error }));
};


exports.getOneSauces = (req, res, next) => {
  Sauces.findOne({ _id: req.params.id })
    .then(sauces => res.status(200).json(thing))
    .catch(error => res.status(404).json({ error }));
};


exports.updateSauces = (req, res, next) => {
  Sauces.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet modifié !'}))
    .catch(error => res.status(400).json({ error }));
};


exports.deleteSauces = (req, res, next) => {
  Sauces.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
    .catch(error => res.status(400).json({ error }));
};