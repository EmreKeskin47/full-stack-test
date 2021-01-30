//User class will be implemented using test driven development
const User = require("./user");

describe("User", () => {
    const kimlikNumarası = 123;
    const adSoyad = "test test";
    const aylıkGelirDilimiÇarpanı = 1000;
    const cepTelefonu = "123456";
    const ilKodu = 61;

    const testUser = new User({
        kimlikNumarası,
        adSoyad,
        aylıkGelirDilimiÇarpanı,
        cepTelefonu,
        ilKodu,
    });

    //Test whether test user has all the required properties
    it("has all required properties", () => {
        expect(testUser.kimlikNumarası).toEqual(kimlikNumarası);
        expect(testUser.adSoyad).toEqual(adSoyad);
        expect(testUser.aylıkGelirDilimiÇarpanı).toEqual(
            aylıkGelirDilimiÇarpanı
        );
        expect(testUser.cepTelefonu).toEqual(cepTelefonu);
        expect(testUser.ilKodu).toEqual(ilKodu);
    });

    //Test whether output calculteSkorSegment() satisfies lower and upper bound
    describe("calculateSkorSegmenti()", () => {
        it("returns an integer lower than upper limit", () => {
            expect(testUser.skorSegment).toBeLessThanOrEqual(9);
        });
        it("returns an integer higher than lower limit", () => {
            expect(testUser.skorSegment).toBeGreaterThanOrEqual(1);
        });
    });

    //Test whether output calculateŞehirSkor() satisfies lower and upper bound
    describe("calculateŞehirSkor()", () => {
        it("returns an integer lower than upper limit", () => {
            expect(testUser.şehirSkor).toBeLessThanOrEqual(2000);
        });
        it("returns an integer higher than lower limit", () => {
            expect(testUser.şehirSkor).toBeGreaterThanOrEqual(0);
        });
    });

    //Test whether output calculateToplamSkor() works properly
    describe("calculateToplamSkor()", () => {
        const toplam =
            testUser.skorSegment * testUser.aylıkGelirDilimiÇarpanı +
            testUser.şehirSkor;
        it("works properly", () => {
            expect(testUser.toplamSkor).toEqual(toplam);
        });
    });
});
