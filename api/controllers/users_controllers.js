const db = require("../models");
const User = db.users;
const Book = db.books;

// Get all User include books
exports.findAllUserHTTP = (req, res) => {
  console.log('HTTP Find ALL:')
  return User.findAll({
    include: ["books"],
  }).then((users) => {
    return res.json({ users })
  });
};

// Create and Save new users
exports.createUserHTTP = (req, res) => {
  return User.create({ ...req.body }).then((user) => {
    console.log(">> Created user: " + JSON.stringify(user, null, 4));
    return res.json({ user })
  }).catch((err) => {
    console.log(">> Error while creating user: ", err);
  });
};

// Create and Save new users
exports.updateUserByIdHTTP = (req, res) => {
  return User.update({ ...req.body }, { where: { id: req.params.id } }).then((user) => {
    console.log(">> Created user: " + JSON.stringify(user, null, 4));
    return res.json({ user })
  }).catch((err) => {
    console.log(">> Error while creating user: ", err);
  });
};

// Get the books for a given user
exports.findUserByIdHTTP = (req, res) => {
  return User.findByPk(req.params.id, { include: ["books"] }).then((user) => {
    return res.json({ user });
  }).catch((err) => {
    console.log(">> Error while finding user: ", err);
  });
};

// Get the books for a given user
exports.deleteUserByIdHTTP = (req, res) => {
  return User.destroy({where: { id: req.params.id }}).then((user) => {
    return res.json({ user });
  }).catch((err) => {
    console.log(">> Error while finding user: ", err);
  });
};

// Get the books for a given user
exports.deleteAllUserHTTP = (req, res) => {
  return User.destroy({where: {}}).then((user) => {
    return res.json({ user });
  }).catch((err) => {
    console.log(">> Error while finding user: ", err);
  });
};
