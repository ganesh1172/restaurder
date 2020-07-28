import React, { useState } from 'react';
import Modal from 'react-modal';
import restaurantdb from '../database/module';
import '../styles/loginPin.css';

Modal.setAppElement('#root');

function Login() {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    let db = restaurantdb("Restaurant", {
        users: '++id'
    });


    return (
        <div>
            <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
            <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick onRequestClose={() => setModalIsOpen(false)}>
                <div className="pin-login" id="mainPinLogin">
                    <input type="password" readonly className="pin-login__text" />
                    <div className="pin-login__numpad">
                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default Login
