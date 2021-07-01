const db = require("../api/models");
const User = db.users;
const Book = db.books;
const run = require('./').run

// Create and Save new users
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

// Create and Save new books
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

// Get the books for a given user
exports.findUserById = (id) => {
  return User.findByPk(id, { include: ["books"] }).then((user) => {
    return user;
  }).catch((err) => {
    console.log(">> Error while finding user: ", err);
  });
};

// Get the books for a given book id
exports.findBookById = (id) => {
  return Book.findByPk(id, { include: ["users"] }).then((book) => {
    return book;
  }).catch((err) => {
    console.log(">> Error while finding book: ", err);
  });
};

// Get all User include books
exports.findAll = () => {
  return User.findAll({
    include: ["books"],
  }).then((users) => {
    return users;
  });
};