const mongoose = require("mongoose");
require("./models/user");

//Connect method from mongoDB atlas to establish connection to the DB
exports.connect = () => {
    return mongoose.connect(
        process.env.DB_URI,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        },
        (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log("Connected to DB!");
            }
        }
    );
};
