import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

import "./Form.css";
import "bootstrap/dist/css/bootstrap.min.css";

const FormComponent = (props) => {
    const [kimlikNo, setKimlikNo] = useState("");
    const [adSoyad, setAdSoyad] = useState("");
    const [aylıkÇarpan, setAylıkÇarpan] = useState(0);
    const [telefonNo, setTelefonNo] = useState("");
    const [ilKodu, setİlKodu] = useState(0);

    const onFormSubmit = () => {
        return true;
    };

    return (
        <Form class="formContainer">
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

            <div class="dropdown">
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
                    <Dropdown.Item eventKey="1000">3000TL-4999TL</Dropdown.Item>
                    <Dropdown.Item eventKey="1200">5000TL-7999TL</Dropdown.Item>
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
                    <Alert variant="info">
                        Yukarıdaki her alan doldurulunca kaydetme butonu
                        otomatik olarak ortaya çıkıcaktır.
                    </Alert>
                ) : (
                    <Button type="submit" onClick={onFormSubmit}>
                        Kullanıcıyı Kaydet
                    </Button>
                )
            }
        </Form>
    );
};

export default FormComponent;
