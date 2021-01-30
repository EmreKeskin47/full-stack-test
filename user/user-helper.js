function calculateSkorSegment(kimlikNo) {
    //Kimlik numarası verilmediyse skor segmenti olarak -1 döner
    return kimlikNo ? Math.floor(Math.random() * 9 + 1) : -1;
}

function calculateŞehirSkor(ilKodu) {
    //İlKodu verilmediyse şehir skoru olarak -1 döner
    return ilKodu ? Math.floor(Math.random() * 2000) : -1;
}

function calculateToplamSkor(skorSegment, aylıkGelirDilimiÇarpanı, şehirSkor) {
    // bütün gereken veriler verilmediyse toplam skor olarak -1 döner
    return (skorSegment > 0) & (aylıkGelirDilimiÇarpanı > 0) & (şehirSkor > 0)
        ? skorSegment * aylıkGelirDilimiÇarpanı + şehirSkor
        : -1;
}

module.exports = {
    calculateSkorSegment,
    calculateŞehirSkor,
    calculateToplamSkor,
};
