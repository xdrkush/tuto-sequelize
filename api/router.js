/*
 * Import Module
 ****************/
const express = require('express'),
    router = express.Router()

/*
 * Controller
 *************/
const userController = require('./controllers/users_controllers')
const bookController = require('./controllers/books_controllers')

/*
 * Router
 ***********/

// User
router.route('/user')
    .get(userController.findAllUserHTTP)
    .post(userController.createUserHTTP)
    .delete(userController.deleteAllUserHTTP)

// User ID
router.route('/user/:id')
    .get(userController.findUserByIdHTTP)
    .put(userController.updateUserByIdHTTP)
    .delete(userController.deleteUserByIdHTTP)

// Book
router.route('/book')
    .get(bookController.findAllBookHTTP)
    .post(bookController.createBookHTTP)
    .delete(bookController.deleteAllBookHTTP)

// Book ID
router.route('/book/:id')
    .get(bookController.findBookByIdHTTP)
    .put(bookController.updateBookByIdHTTP)
    .delete(bookController.deleteBookByIdHTTP)

/***********
 * / Router
 */

// on export router pour le récupérer dans ../server.js
module.exports = router;
