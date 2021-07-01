const db = require("../models");
const Book = db.books;
const User = db.users;

// On récupère tout nos books avec les user (userId = author) en relation
exports.findAllBookHTTP = async (req, res) => {
    console.log('HTTP Find ALL:')
    const books = await Book.findAll({ include: ["users"] })
    return res.json({ books })
};

// Création d'un book
// Et on renvoie l'user avec les book en relation
exports.createBookHTTP = async (req, res) => {
    await Book.create({ ...req.body })
    const user = await User.findByPk(req.body.userId, { include: ["books"] })

    return res.json({ user })
};

// Update Book
exports.updateBookByIdHTTP = async  (req, res) => {
    await Book.update({ ...req.body }, { where: { id: req.params.id } })

    const books = await Book.findAll({ include: ["users"] })
    return res.json({ books })
};

// Rechercher un book via son id avec les user en relations
exports.findBookByIdHTTP = async (req, res) => {
    const book = await Book.findByPk(req.params.id, { include: ["users"] })
    return res.json({ book });
};

// Supprimer un book via sont id
exports.deleteBookByIdHTTP = async (req, res) => {
    await Book.destroy({ where: { id: req.params.id } })

    const books = await Book.findAll({ include: ["users"] })
    return res.json({ books });
};

// Supprimer tous les books
exports.deleteAllBookHTTP = async (req, res) => {
    await Book.destroy({ where: {}, truncate: true })

    const books = await Book.findAll({ include: ["users"] })
    return res.json({ books });
};
