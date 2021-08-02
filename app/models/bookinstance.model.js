// Book instance: represents a specific copy of a book that someone might borrow

var mongoose = require("mongoose");

var Scheme = mongoose.Schema;

var BookInstanceSchema = new Scheme(
    {
        book: { type: Scheme.Types.ObjectId, ref: 'Book', require: true },
        imprint: { type: String, required: true },
        status: { type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance' },
        due_back: { type: Date, default: Date.now }
    },
    { timestamps: true }
);

// Virtual for bookinstance's url
BookInstanceSchema
    .virtual('url')
    .get(function() {
        return '/catalog/bookinstance/' + this._id;
    });

module.exports = mongoose.model('BookInstance', BookInstanceSchema);