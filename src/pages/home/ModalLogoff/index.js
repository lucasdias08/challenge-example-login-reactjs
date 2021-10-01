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
                <Modal.Title className="d-flex w-100 align-items-center justify-content-center">
                    <small className="text-danger w-100">
                        Deseja efetuar o LogOff?
                    </small>
                </Modal.Title>
                <Modal.Body>
                        <Button
                            className="text-white w-100 mr-5"
                            variant="danger"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Efetuar Logoff"
                            onClick={logoff}>
                            Sair
                        </Button>
                    
                </Modal.Body>
            </Modal.Header>
        </Modal>
    );
}

export default ModalLogoff;