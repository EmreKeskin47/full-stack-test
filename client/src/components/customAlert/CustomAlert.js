import React from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const CustomAlert = (props) => {
    return (
        <div>
            <Alert variant={props.variant}>{props.title}</Alert>
            <Button type="button"> Dissmis</Button>
        </div>
    );
};

export default CustomAlert;
