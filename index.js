require("dotenv").config();
const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const { PORT_NUMBER } = require("./temp");

const app = express();
app.use(cors());

async function runServer() {
    app.use(bodyParser.json());
    await require("./db").connect();

    app.get("", (req, res) => {
        res.send("Welcome to FullStackDeveloperTask");
    });
    app.use("/api/v1/user/", require("./routes/user"));

    //const PORT = process.env.PORT_NUMBER;
    const PORT = PORT_NUMBER;
    app.listen(PORT, (err) => {
        if (err) console.error(err);
        console.log("Server ready on port:", PORT);
    });
}

runServer();
