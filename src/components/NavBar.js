import React, { Component } from 'react';
import { Button, Navbar, ButtonToolbar } from 'react-bootstrap';
import Login from '../components/Login';

export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addModalShow: false,
        }
    }
    render() {
        let addModalClose = () => this.setState({ addModalShow: false });
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="#home" className="mr-auto" >Restaurder</Navbar.Brand>
                    <ButtonToolbar>
                        <Button variant="primary"
                            onClick={() => this.setState({ addModalShow: true })}>Show</Button>
                        <Login show={this.state.addModalShow} onHide={addModalClose} />
                    </ButtonToolbar>
                </Navbar>
            </div>
        )
    }
}
