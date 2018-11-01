import React, { Component } from 'react';
import chainedClasses from './class_chaining';

class Login extends Component { // The login page
    constructor (props) {
        super(props);
        this.state = {
            password: '',   // To store user input
        }
    }
    render () {
        return (
            <div className={chainedClasses.my_card}>
                <div className="card-header">
                    Shibboleth
                </div>
                <div className="card-body">
                    <p className="card-text">
                        Please enter your password, or scan your passQRcode.
                    </p>
                    <input
                        onChange={function (event) {
                            this.setState({password: event.target.value});  // update state
                        }.bind(this)}
                        type="password"
                        className="form-control border-3"
                    />
                    <button onClick={function () {
                        // Validate password
                        console.log('Pretending password valid. ');
                        this.setState({password: 'RESET'});
                        this.props.nextPage();
                    }.bind(this)} type="button" className="btn btn-block btn-primary">Log in</button>
                    <button onClick={qr} type="button" className="btn btn-block btn-secondary">Scan QR</button>
                </div>
            </div>
        );
    }
}

const qr = function tryLoginQR () {
    // Scan QR button does nothing
    alert(`This demo doesn't support QR login. `);
};

const login = { // What we export
    title: 'Data Collector',    // title string for this page
    body: Login,    // body component for this page
};

export default login;
