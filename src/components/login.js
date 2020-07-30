import React, { Component } from 'react';
import restaurantdb from '../database/module';
import '../styles/loginPin.css';
import { Modal } from 'react-bootstrap';
import { TiBackspaceOutline } from 'react-icons/ti';
import { GrValidate } from 'react-icons/gr';

class Login extends Component {


    render() {
        let db = restaurantdb("Restaurant", {
            users: '++id'
        });

        return (
            <div>
                <Modal
                    {...this.props}
                    size="sm"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Body>
                        <div className="pin-login" id="mainPinLogin">
                            <input type="password" className="pin-login__text" />
                            <div className="pin-login__numpad">
                                <div className="pin-login__key">1</div>
                                <div className="pin-login__key">2</div>
                                <div className="pin-login__key">3</div><br />
                                <div className="pin-login__key">4</div>
                                <div className="pin-login__key">5</div>
                                <div className="pin-login__key">6</div><br />
                                <div className="pin-login__key">7</div>
                                <div className="pin-login__key">8</div>
                                <div className="pin-login__key">9</div><br />
                                <div className="pin-login__key"><TiBackspaceOutline /></div>
                                <div className="pin-login__key">0</div>
                                <div className="pin-login__key"><GrValidate /></div>
                            </div>
                        </div>
                        {/* <Button variant="danger" onClick={this.props.onHide}>Close</Button> */}
                    </Modal.Body>
                </Modal>
            </div >
        )
    }
}
export default Login;