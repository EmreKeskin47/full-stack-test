class User {
    constructor({
        kimlikNumarası,
        adSoyad,
        aylıkGelirDilimiÇarpanı,
        cepTelefonu,
        ilKodu,
    }) {
        //-1 means they are not yet calculated
        this.kimlikNumarası = kimlikNumarası;
        this.adSoyad = adSoyad;
        this.aylıkGelirDilimiÇarpanı = aylıkGelirDilimiÇarpanı;
        this.cepTelefonu = cepTelefonu;
        this.ilKodu = ilKodu;
        this.skorSegment = this.calculateSkorSegment(this.kimlikNumarası);
        this.şehirSkor = this.calculateŞehirSkor(this.ilKodu);
        this.toplamSkor = this.calculateToplamSkor(
            this.skorSegment,
            this.aylıkGelirDilimiÇarpanı,
            this.şehirSkor
        );
    }

    calculateSkorSegment(kimlikNo) {
        //Kimlik numarası verilmediyse skor segmenti olarak -1 döner
        return kimlikNo ? Math.floor(Math.random() * 9 + 1) : -1;
    }

    calculateŞehirSkor(ilKodu) {
        //İlKodu verilmediyse şehir skoru olarak -1 döner
        return ilKodu ? Math.floor(Math.random() * 2000) : -1;
    }

    calculateToplamSkor(skorSegment, aylıkGelirDilimiÇarpanı, şehirSkor) {
        // bütün gereken veriler verilmediyse toplam skor olarak -1 döner
        return skorSegment & aylıkGelirDilimiÇarpanı & şehirSkor
            ? skorSegment * aylıkGelirDilimiÇarpanı + şehirSkor
            : -1;
    }
}

module.exports = User;
