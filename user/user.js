const {
    calculateSkorSegment,
    calculateŞehirSkor,
    calculateToplamSkor,
} = require("./user-helper");

class User {
    constructor({
        kimlikNumarası,
        adSoyad,
        aylıkGelirDilimiÇarpanı,
        cepTelefonu,
        ilKodu,
    }) {
        this.kimlikNumarası = kimlikNumarası;
        this.adSoyad = adSoyad;
        this.aylıkGelirDilimiÇarpanı = aylıkGelirDilimiÇarpanı;
        this.cepTelefonu = cepTelefonu;
        this.ilKodu = ilKodu;
        this.skorSegment = calculateSkorSegment(this.kimlikNumarası);
        this.şehirSkor = calculateŞehirSkor(this.ilKodu);
        this.toplamSkor = calculateToplamSkor(
            this.skorSegment,
            this.aylıkGelirDilimiÇarpanı,
            this.şehirSkor
        );
    }
}

module.exports = User;
