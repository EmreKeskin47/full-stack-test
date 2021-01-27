require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT_NUMBER;

app.get("/", (req, res) => {
    res.send("Wellcome to FullStackDeveloperTask");
});

app.listen(port, async () => {
    console.log(`listening on port ${port}!`);
    await require("./db").connect();
});
