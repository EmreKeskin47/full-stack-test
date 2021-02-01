import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import ProgressBar from "react-bootstrap/ProgressBar";
import { createUser, getUserByKimlikNo } from "../../api/UserAPI";
import "./Form.css";
import "bootstrap/dist/css/bootstrap.min.css";

//Form component can be used as a form, to create a new user and also to edit already existing user
const FormComponent = (props) => {
    //Props must contain these values so that form will be automatically filled while editing already existing user
    const { user } = props;

    const [kimlikNo, setKimlikNo] = useState(user.kimlikNumarası);
    const [adSoyad, setAdSoyad] = useState(user.adSoyad);
    const [aylıkÇarpan, setAylıkÇarpan] = useState(
        user.aylıkGelirDilimiÇarpanı
    );
    const [telefonNo, setTelefonNo] = useState(user.cepTelefonu);
    const [ilKodu, setİlKodu] = useState(user.ilKodu);
    const [skorSegment, setSkorSegment] = useState(user.skorSegment);
    const [şehirSkor, setŞehirSkor] = useState(user.şehirSkor);
    const [toplamSkor, setToplamSkor] = useState(user.toplamSkor);
    const [success, setSuccess] = useState();
    const [score, setScore] = useState(false);

    const onFormSubmit = async () => {
        const kimlikNoExists = await getUserByKimlikNo(kimlikNo);
        if (!kimlikNoExists || kimlikNoExists.length === 0) {
            try {
                const res = await createUser(
                    kimlikNo,
                    adSoyad,
                    aylıkÇarpan,
                    telefonNo,
                    ilKodu
                );
                setSkorSegment(res.data.skorSegment);
                setŞehirSkor(res.data.şehirSkor);
                setToplamSkor(res.data.toplamSkor);
                setScore(true);
            } catch (err) {
                console.log(err);
            }
        } else {
            setSuccess(false);
        }
    };

    return (
        <div className="root">
            <Form className="formContainer">
                <Form.Group>
                    <Form.Label>Kimlik Numarası</Form.Label>
                    <Form.Control
                        placeholder="Kimlik No"
                        value={kimlikNo}
                        onChange={(event) => {
                            setKimlikNo(event.target.value);
                        }}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Ad Soyad</Form.Label>
                    <Form.Control
                        placeholder="İsim Soyisim"
                        value={adSoyad}
                        onChange={(event) => {
                            setAdSoyad(event.target.value);
                        }}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Telefon Numaranız</Form.Label>
                    <Form.Control
                        placeholder="Telefon"
                        value={telefonNo}
                        onChange={(event) => {
                            setTelefonNo(event.target.value);
                        }}
                    />
                </Form.Group>

                <div className="dropdown">
                    <DropdownButton
                        required
                        alignRight
                        title="Aylık Gelir Dilimi"
                        id="dropdown-menu-align-right"
                        onSelect={(event) => {
                            setAylıkÇarpan(event);
                        }}
                    >
                        <Dropdown.Item eventKey="800">0-2999TL</Dropdown.Item>
                        <Dropdown.Item eventKey="1000">
                            3000TL-4999TL
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1200">
                            5000TL-7999TL
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="1500">
                            8000TL-11999TL
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="2000">
                            12000TL ve üzeri
                        </Dropdown.Item>
                    </DropdownButton>
                    <DropdownButton
                        required
                        alignRight
                        title="Şehir Seçimi"
                        id="dropdown-menu-align-right"
                        onSelect={(event) => {
                            setİlKodu(event);
                        }}
                    >
                        <Dropdown.Item eventKey="6">Ankara</Dropdown.Item>
                        <Dropdown.Item eventKey="34">İstanbul</Dropdown.Item>
                        <Dropdown.Item eventKey="61">Trabzon</Dropdown.Item>
                    </DropdownButton>
                </div>
                {
                    //Conditional Rendering, user can only submit inputs if he/she has given all the required data
                    (kimlikNo !== "") &
                    (adSoyad !== "") &
                    (aylıkÇarpan !== 0) &
                    (telefonNo !== "") &
                    (ilKodu !== 0) ? (
                        <Button type="button" onClick={onFormSubmit}>
                            {props.actionTitle}
                        </Button>
                    ) : (
                        <Alert variant="info">
                            Yukarıdaki her alan doldurulunca kaydetme tuşu
                            otomatik olarak ortaya çıkıcaktır.
                        </Alert>
                    )
                }
            </Form>
            {score === true ? (
                <div className="scoreboard">
                    <Alert variant="info">{`${props.actionTitle} Successful`}</Alert>

                    <h2 className="title"> USER SCORES </h2>
                    <h4> skorSegment: {skorSegment}/9</h4>
                    <ProgressBar
                        class="progress-bar"
                        now={parseInt((skorSegment * 100) / 9)}
                        label={`${parseInt((skorSegment * 100) / 9)}%`}
                    />

                    <h4> şehirSkor: {şehirSkor}/2000</h4>
                    <ProgressBar
                        class="progress-bar"
                        now={parseInt((şehirSkor * 100) / 2000)}
                        label={`${parseInt((şehirSkor * 100) / 2000)}%`}
                    />

                    <h4> toplamSkor: {toplamSkor}/20,000</h4>
                    <ProgressBar
                        class="progress-bar"
                        now={parseInt((toplamSkor * 100) / 20000)}
                        label={`${parseInt((toplamSkor * 100) / 20000)}%`}
                    />
                </div>
            ) : success === false ? (
                <Alert variant="danger">
                    {`${props.actionTitle} failed, same user already exists`}
                </Alert>
            ) : (
                <div></div>
            )}
        </div>
    );
};
export default FormComponent;
