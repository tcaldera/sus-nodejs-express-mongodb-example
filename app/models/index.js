// Define Mongoose Model
const dbConfig = require("../config/db.config");
const mongoose = require("mongoose");

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.author = require("./author.model");
db.book = require("./book.model");
db.bookinstance = require("./bookinstance.model");
db.genre = require("./genre.model");

module.exports = db;