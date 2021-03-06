const db = require("../models");
const Book = db.books;
const User = db.users;

// On récupère tout nos books avec les user (userId = author) en relation
exports.findAllBookHTTP = (req, res) => {
    console.log('HTTP Find ALL:')
    return Book.findAll({
        include: ["users"],
    }).then((books) => {
        return res.json({ books })
    });
};

// Création d'un book
// Et on renvoie l'user avec les book en relation
exports.createBookHTTP = (req, res) => {
    return Book.create({ ...req.body }).then((book) => {
        console.log(">> Created book: " + JSON.stringify(book, null, 4));
        return User.findByPk(book.userId, { include: ["books"] }).then(user => {
            console.log(">> Created book: " + JSON.stringify(user, null, 4));
            return res.json({ user })

        })
    }).catch((err) => {
        console.log(">> Error while creating book: ", err);
    });
};

// Update Book
exports.updateBookByIdHTTP = (req, res) => {
    return Book.update({ ...req.body }, { where: { id: req.params.id } }).then((user) => {
        console.log(">> Created user: " + JSON.stringify(user, null, 4));
        return res.json({ user })
    }).catch((err) => {
        console.log(">> Error while creating user: ", err);
    });
};

// Rechercher un book via son id avec les user en relations
exports.findBookByIdHTTP = (req, res) => {
    return Book.findByPk(req.params.id, { include: ["users"] }).then((book) => {
        return res.json({ book });
    }).catch((err) => {
        console.log(">> Error while finding book: ", err);
    });
};

// Supprimer un book via sont id
exports.deleteBookByIdHTTP = (req, res) => {
    return Book.destroy({ where: { id: req.params.id } }).then((user) => {
        return res.json({ user });
    }).catch((err) => {
        console.log(">> Error while finding user: ", err);
    });
};

// Supprimer tous les books
exports.deleteAllBookHTTP = (req, res) => {
    return Book.destroy({ where: {}, truncate: true }).then((user) => {
        return res.json({ user });
    }).catch((err) => {
        console.log(">> Error while finding user: ", err);
    });
};
