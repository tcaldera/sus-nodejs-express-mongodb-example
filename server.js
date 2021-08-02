const express = require("express");
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: "http://localhost: 8081"
};

var authors = [];

/**
 * Use CORS with corsOptions
 * Parse requests with Content-Type: application/json
 * Parse requests with Content-Type: application/x-www-form-urlencoded
 */
app.use(cors(corsOptions));
//app.use (express.static(path.join( __dirname,'./dist/angular-)));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * Connect to database
 */
const db = require("./app/models");
const authorModel = require("./app/models/author.model");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Connected to the mongo database :}")
    })
    .catch(err => {
        console.log("Cannot connect to the mongo datbase :( : ", err);
        process.exit();
    });

// Simple route
app.get('/', (res, req) => {
    res.json({ message: 'Hello from the tutorial server :}'})
});

// Set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`);

    var authordetail = {first_name: "Author Firstname" , family_name: "Author Lastname" }
    var author = new authorModel(authordetail);
    author.save(function(err) {
        if (err) {
            return err;
        }
        authors.push(author);
    })

});

