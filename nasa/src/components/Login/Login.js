import React, { Component } from 'react'
import './Login.css'
class Login extends Component {
    state = {}
    render() {
        return (
            <button onClick={this.props.authenticate} className="facebook-button btn-danger fb">
                Connexion
            </button>
        );
    }
}

export default Login;