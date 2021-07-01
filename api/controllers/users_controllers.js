const db = require("../models");
const User = db.users;
const Book = db.books;

// On récupère tout nos user avec les book en relation
exports.findAllUserHTTP = async (req, res) => {
  console.log('HTTP Find ALL:')
  const users = await User.findAll({ include: ["books"] })
  return res.json({ users })
};

// on créé notre user
exports.createUserHTTP = async (req, res) => {
  // Attention à ce que le {...req.body} corresponde bien avec les key:value de notre model
  const user = await User.create({ ...req.body })
  console.log(">> Created user: " + JSON.stringify(user, null, 4));
  return res.json({ user })
};

// Update Users
exports.updateUserByIdHTTP = async (req, res) => {
  // where pour définir quel user à éditer
  await User.update({ ...req.body }, { where: { id: req.params.id } })

  // Pour renvoyer tous les users de la DB avec les book en relation
  const users = await User.findAll({ include: ["books"] })
  return res.json({ users })
};

// Rechercher un user via son id avec les book en relations
exports.findUserByIdHTTP = async (req, res) => {
  const user = await User.findByPk(req.params.id, { include: ["books"] })
  return res.json({ user });
};

// Supprimer un user via sont id
exports.deleteUserByIdHTTP = async (req, res) => {
  await User.destroy({ where: { id: req.params.id } })

  const users = await User.findAll({ include: ["books"] })
  return res.json({ users });
};

// Supprimer tous les users
exports.deleteAllUserHTTP = async (req, res) => {
  await User.destroy({ where: {} })

  const users = await User.findAll({ include: ["books"] })
  return res.json({ users });
};
