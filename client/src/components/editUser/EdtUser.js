import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import User from "../../models/User";
import "./EditUser.css";
import { getUserByKimlikNo } from "../../api/UserAPI";
import FormComponent from "../form/Form";

const EditUser = () => {
    const [user, setUser] = useState();
    const [kimlikNo, setKimlikNo] = useState("");
    const [error, setError] = useState(false);
    const [userExist, setUserExist] = useState(false);

    const searchByKimlikNo = async () => {
        const res = await getUserByKimlikNo(kimlikNo);
        if (res.length === 0) {
            setError(true);
        } else {
            let user = new User(
                res[0].kimlikNumarası,
                res[0].adSoyad,
                res[0].aylıkGelirDilimiÇarpanı,
                res[0].cepTelefonu,
                res[0].ilKodu,
                res[0].skorSegment,
                res[0].şehirSkor,
                res[0].toplamSkor
            );
            setUser(user);
            setUserExist(true);
        }
    };
    return (
        <div>
            <Form className="formContainer">
                <Form.Group>
                    <Form.Control
                        placeholder="Aranıcak Kimlik Numarası"
                        value={kimlikNo}
                        onChange={(event) => {
                            setKimlikNo(event.target.value);
                        }}
                    />
                </Form.Group>
                <Button onClick={searchByKimlikNo}>
                    Search with KimlikNumarası
                </Button>
                {error ? (
                    <Alert variant="danger">
                        User with given KimlikNumarası do not exist
                    </Alert>
                ) : userExist ? (
                    <div>
                        <FormComponent
                            user={user}
                            actionTitle={"Update User"}
                        />
                    </div>
                ) : (
                    <div></div>
                )}
            </Form>
        </div>
    );
};

export default EditUser;
