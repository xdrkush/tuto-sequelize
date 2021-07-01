const db = require("../api/models");
const User = db.users;
const Book = db.books;
const run = require('./').run

// Création d'un user
exports.createUser = (user) => {
  return User.create({
    name: user.name,
    email: user.email,
    mobile: user.mobile
  }).then((user) => {
    console.log(">> Created user: " + JSON.stringify(user, null, 4));
    return user;
  }).catch((err) => {
    console.log(">> Error while creating user: ", err);
  });
};

// Création d'un book
exports.createBook = (id, book) => {
  return Book.create({
    title: book.title,
    description: book.description,
    userId: id,
  }).then((book) => {
    console.log(">> Created book: " + JSON.stringify(book, null, 4));
    return book;
  }).catch((err) => {
    console.log(">> Error while creating book: ", err);
  });
};

// Rechercher un User via un id avec les books en relation
exports.findUserById = (id) => {
  return User.findByPk(id, { include: ["books"] }).then((user) => {
    return user;
  }).catch((err) => {
    console.log(">> Error while finding user: ", err);
  });
};

// Rechercher un book via son id avec l'user en relation
exports.findBookById = (id) => {
  return Book.findByPk(id, { include: ["users"] }).then((book) => {
    return book;
  }).catch((err) => {
    console.log(">> Error while finding book: ", err);
  });
};

// Rechercher tous les users
exports.findAll = () => {
  return User.findAll({
    include: ["books"],
  }).then((users) => {
    return users;
  });
};