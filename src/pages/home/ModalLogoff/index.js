import React, { useCallback } from "react";
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ModalLogoff(props) {

    const logoff = useCallback(() => {
        localStorage.removeItem("@test:user");
        window.location.href = "/";
    }, []);


    return (
        <Modal
            show={true}
            centered
            onHide={() => props.setShowLogoff(false)}
            aria-labelledby="example-modal-sizes-title-sm"
        >
            <Modal.Header closeButton={true}>
                <Modal.Title id="example-modal-sizes-title-sm">
                    <small className="text-danger">
                        Deseja efetuar o LogOff?
                    </small>
                </Modal.Title>
                <Modal.Body>
                    <div className="d-flex flex-column w-100">
                        <Button
                            className="text-white w-100"
                            variant="danger"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Efetuar Logoff"
                            onClick={logoff}>
                            Sair
                        </Button>
                    </div>
                </Modal.Body>
            </Modal.Header>
        </Modal>
    );
}

export default ModalLogoff;