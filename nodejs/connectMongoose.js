const mongoose = require("mongoose");

function connectMongoose () {
    mongoose.connect(
        `mongodb+srv://abhishek:abhishek@cluster0-zpu0j.mongodb.net/test?retryWrites=true&w=majority`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
    );
}

module.exports = connectMongoose;
