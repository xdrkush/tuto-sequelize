const db = require("../models");
const User = db.users;
const Book = db.books;

// On récupère tout nos user avec les book en relation
exports.findAllUserHTTP = (req, res) => {
  console.log('HTTP Find ALL:')
  return User.findAll({
    include: ["books"],
  }).then((users) => {
    return res.json({ users })
  });
};

// on créé notre user
exports.createUserHTTP = (req, res) => {
  // Attention à ce que le {...req.body} corresponde bien avec les key:value de notre model
  return User.create({ ...req.body }).then((user) => {
    console.log(">> Created user: " + JSON.stringify(user, null, 4));
    return res.json({ user })
  }).catch((err) => {
    console.log(">> Error while creating user: ", err);
  });
};

// Update Users
exports.updateUserByIdHTTP = (req, res) => {
  // where pour définir quel user à éditer
  return User.update({ ...req.body }, { where: { id: req.params.id } }).then((user) => {
    console.log(">> Created user: " + JSON.stringify(user, null, 4));
    return res.json({ user })
  }).catch((err) => {
    console.log(">> Error while creating user: ", err);
  });
};

// Rechercher un user via son id avec les book en relations
exports.findUserByIdHTTP = (req, res) => {
  return User.findByPk(req.params.id, { include: ["books"] }).then((user) => {
    return res.json({ user });
  }).catch((err) => {
    console.log(">> Error while finding user: ", err);
  });
};

// Supprimer un user via sont id
exports.deleteUserByIdHTTP = (req, res) => {
  return User.destroy({where: { id: req.params.id }}).then((user) => {
    return res.json({ user });
  }).catch((err) => {
    console.log(">> Error while finding user: ", err);
  });
};

// Supprimer tous les users
exports.deleteAllUserHTTP = (req, res) => {
  return User.destroy({where: {}}).then((user) => {
    return res.json({ user });
  }).catch((err) => {
    console.log(">> Error while finding user: ", err);
  });
};
