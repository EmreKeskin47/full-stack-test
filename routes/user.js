const express = require("express");
const User = require("../db/models/user");
const router = express.Router();

// api/v1/user is the homepage for this class

//get method for api/v1/user, all the user are listed as response
router.get("", (req, res) => {
    res.send("User Router");
});

module.exports = router;
