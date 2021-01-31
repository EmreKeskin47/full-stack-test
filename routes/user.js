const express = require("express");
const UserModel = require("../db/models/user");
const router = express.Router();
const {
    calculateSkorSegment,
    calculateŞehirSkor,
    calculateToplamSkor,
} = require("../user/user-helper");

// api/v1/user is the homepage for this class

//GET method for api/v1/user, all the user are listed as response
router.get("/", (req, res) => {
    UserModel.find()
        .then((users) => {
            res.send(users);
        })
        .catch((err) => console.log(err));
});

//GET method for api/v1/user/id, user data with given kimlikNo is returned as response
router.get("/:kimlik", (req, res) => {
    UserModel.find({ kimlikNumarası: { $eq: req.params.kimlik } })
        .then((users) => {
            res.send(users);
        })
        .catch((err) => console.log(err));
});

//POST method for api/v1/user, custom message and user data are returned as response
router.post("", (req, res) => {
    //Creating new user based on request.body
    const newUser = new UserModel({
        kimlikNumarası: req.body.kimlikNumarası,
        adSoyad: req.body.adSoyad,
        aylıkGelirDilimiÇarpanı: req.body.aylıkGelirDilimiÇarpanı,
        cepTelefonu: req.body.cepTelefonu,
        ilKodu: req.body.ilKodu,
        skorSegment: calculateSkorSegment(req.body.kimlikNumarası),
        şehirSkor: calculateŞehirSkor(req.body.ilKodu),
    });

    //calculating total
    newUser.toplamSkor = calculateToplamSkor(
        newUser.skorSegment,
        newUser.aylıkGelirDilimiÇarpanı,
        newUser.şehirSkor
    );

    //Adding user to mongoDB
    newUser
        .save()
        .then((result) => {
            res.send({ message: "Player created successfully", data: result });
        })
        .catch((err) => console.log(err));
});

//DELETE method for api/v1/user/id, deleted user data is returned as response
router.delete("/:id", (req, res) => {
    UserModel.findByIdAndRemove(req.params.id)
        .then((resp) => res.send(resp))
        .catch((err) => console.log(err));
});

//PUT method for api/v1/user/id, updated user is returned as response
router.put("/:id", (req, res) => {
    UserModel.findById(req.params.id)
        .then((user) => {
            user.kimlikNumarası = req.body.kimlikNumarası;
            user.adSoyad = req.body.adSoyad;
            user.aylıkGelirDilimiÇarpanı = req.body.aylıkGelirDilimiÇarpanı;
            user.cepTelefonu = req.body.cepTelefonu;
            user.ilKodu = req.body.ilKodu;
            user.skorSegment = calculateSkorSegment(req.body.kimlikNumarası);
            user.şehirSkor = calculateŞehirSkor(req.body.ilKodu);
            user.toplamSkor = calculateToplamSkor(
                user.skorSegment,
                req.body.aylıkGelirDilimiÇarpanı,
                user.şehirSkor
            );
            return user.save();
        })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => console.log(err));
});

router.delete("/", (req, res) => {
    UserModel.deleteMany({})
        .then(res.send("Deleted every user "))
        .catch((err) => console.log(err));
});

module.exports = router;
