const db = require("../models");
const Author = db.author;

/**
 * Create and Save a new Author
 */
exports.create = (req, res) => {
    //const first_name = req.body.first_name;
    //const last_name = req.body.last_name;
    Author.create(req.body, function(err, new_author) {
        if (err) return err.message; // need to handle error better
        res.send(new_author);
    });
}

/**
 * Retrieve all Authors from database
 */
exports.findAll = (req, res) => {
    await Author.find({}, function(err, authors) {
        if (err) return err.message;
        res.send(authors);
    });
}

/**
 * Find a single Author
 */

/**
 * Update a Author with an id in the request
 */

/**
 * 
 */

/**
 * Delete a Author with the specified id in the request
 */

/**
 * Delete all Authors from the database
 */

/**
 * Find all published Authors
 */