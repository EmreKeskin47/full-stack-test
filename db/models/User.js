const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    kimlikNumarası: { type: String, required: true },
    adSoyad: { type: String, required: true },
    aylıkGelirDilimi: { type: String, required: true },
    cepTelefonu: { type: String, required: true },
    ikamet: { type: String, required: true },
    skorSegmenti: Number,
    şehirSkoru: Number,
});

//create a model
module.exports = mongoose.model("User", UserSchema);
