/*
Se fichier va nous permetre de parametré notre DB
Les models à importer, les relations, ...
*/

const dbConfig = require("../../config/db_config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  }
});

// On stock tout dans db pour pouvoir exporter notre config plus facilement
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Import de nos models
db.users = require("./users_model.js")(sequelize, Sequelize);
db.books = require("./books_model.js")(sequelize, Sequelize);

// Les relations
db.users.hasMany(db.books, { as: "books" });
db.books.belongsTo(db.users, {
  foreignKey: "userId",
  as: "users",
});

module.exports = db;
