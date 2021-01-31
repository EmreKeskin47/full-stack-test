import axios from "axios";
const BASE_URL = "http://localhost:3001/api/v1/user/";

export const createUser = async (
    kimlikNo,
    adSoyad,
    aylıkÇarpan,
    telefonNo,
    ilKodu
) => {
    try {
        const response = await axios.post(BASE_URL, {
            kimlikNumarası: kimlikNo,
            adSoyad: adSoyad,
            aylıkGelirDilimiÇarpanı: aylıkÇarpan,
            cepTelefonu: telefonNo,
            ilKodu: ilKodu,
        });
        return response.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const getAll = async () => {
    try {
        const response = await fetch(BASE_URL);
        console.log(response.data);
        return response.data;
    } catch (err) {
        console.log(err);
        return null;
    }
};

export const getUserByKimlikNo = async (kimlikNo) => {
    try {
        const response = await axios.get(`${BASE_URL}/${kimlikNo}`);
        return response.data ? response.data : null;
    } catch (err) {
        console.log(err);
        return null;
    }
};

export const updateUser = async (
    id,
    kimlikNo,
    adSoyad,
    aylıkÇarpan,
    telefonNo,
    ilKodu
) => {
    try {
        const response = await axios.put(`${BASE_URL}/${id}`, {
            kimlikNo,
            adSoyad,
            aylıkÇarpan,
            telefonNo,
            ilKodu,
        });
        return response.data;
    } catch (err) {
        console.log(err);
        return null;
    }
};

export const deleteUser = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`);
        if (response) {
            return true;
        }
    } catch (err) {
        console.log(err);
    }
};
