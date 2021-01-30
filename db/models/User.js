const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    kimlikNumarası: { type: String, required: true },
    adSoyad: { type: String, required: true },
    aylıkGelirDilimiÇarpanı: { type: Number, required: true },
    cepTelefonu: { type: String, required: true },
    ilKodu: { type: Number, required: true },
    skorSegment: Number,
    şehirSkor: Number,
    toplamSkor: Number,
});

//create a model
module.exports = mongoose.model("UserModel", UserSchema);
