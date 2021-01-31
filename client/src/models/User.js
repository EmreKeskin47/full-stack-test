class User {
    constructor(
        kimlikNumarası,
        adSoyad,
        aylıkGelirDilimiÇarpanı,
        cepTelefonu,
        ilKodu,
        skorSegment,
        şehirSkor,
        toplamSkor
    ) {
        this.kimlikNumarası = kimlikNumarası;
        this.adSoyad = adSoyad;
        this.aylıkGelirDilimiÇarpanı = aylıkGelirDilimiÇarpanı;
        this.cepTelefonu = cepTelefonu;
        this.ilKodu = ilKodu;
        this.skorSegment = skorSegment;
        this.şehirSkor = şehirSkor;
        this.toplamSkor = toplamSkor;
    }
}

export default User;
