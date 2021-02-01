import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import User from "../../models/User";
import { getUserByKimlikNo } from "../../api/UserAPI";
import FormComponent from "../form/Form";
import CustomAlert from "../customAlert/CustomAlert";
import Alert from "react-bootstrap/Alert";
import "./EditUser.css";

//This will be edit user page
const EditUser = () => {
    const [user, setUser] = useState();
    const [kimlikNo, setKimlikNo] = useState("");
    const [error, setError] = useState(false);

    //User will give kimlikNo as input and this method will notify api regarding the request
    const searchByKimlikNo = async () => {
        const res = await getUserByKimlikNo(kimlikNo);
        if (res.length === 0) {
            setError(true);
        } else {
            //If the user has given a valid kimlikNo, desired user info will be loaded
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
            //setUser hook will make form component load with desired user information
            setUser(user);
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
                    <CustomAlert
                        variant="danger"
                        title="User with given KimlikNumarası do not exist"
                    />
                ) : user ? (
                    //If user exists, this means user has given a valid kimlikNo therefore form component will be rendered
                    <div>
                        <FormComponent
                            user={user}
                            actionTitle={"Update User"}
                        />
                    </div>
                ) : (
                    <div>
                        <Alert variant="info">
                            This part of the screen will consist of desired
                            user's information once valid kimlikNo is provided
                        </Alert>
                    </div>
                )}
            </Form>
        </div>
    );
};

export default EditUser;
