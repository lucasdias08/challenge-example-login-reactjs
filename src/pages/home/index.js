import React, { useState, useEffect, useCallback } from 'react';

import { Alert } from 'react-bootstrap';
import { FaSearch, FaTimesCircle } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalLogoff from './ModalLogoff';

export default function Home() {

    const [showLogoff, setShowLogoff] = useState(false);

    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light h-100'>
            <Alert variant="success w-50">
                <Alert.Heading>Login efetuado com sucesso. Parabéns!</Alert.Heading>
                <hr />
                <p className="mb-0">
                    Para sair, clique <button onClick={() => setShowLogoff(true)} className="btn btn-danger">aqui.</button>
                </p>
            </Alert>

            {showLogoff &&
                <ModalLogoff
                    setShowLogoff={setShowLogoff}
                />
            }
        </div >
    );
};
/*
*/