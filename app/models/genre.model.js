var mongoose = require("mongoose");

var Scheme = mongoose.Schema;

var GenreScheme = new Scheme(
    {
        name: { type: String, required: true, enum: ['Fiction', 'Non-fiction', 'Mystery', 'Fantasy', 'Science Fiction', 'Crime', 'Romance'], default: 'Fiction', maxLength: 100 },
    }
);

// Virtual for genre's url
GenreScheme
    .virtual('Genre')
    .get(function() {
        return '/catalog/genre/' + this._id;
    });

module.exports = mongoose.model('Genre', GenreScheme);