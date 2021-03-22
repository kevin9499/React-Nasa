import React from 'react'
import img from './asset/logo.png'
import { Menu } from 'antd';
import { Link } from 'react-router-dom'
import firebase from 'firebase/app'
import 'firebase/auth'
import base, { firebaseApp } from '../../base'
import Login from '../Login/Login'
import { UserOutlined } from '@ant-design/icons';

class Navbar extends React.Component {
    state = {
        islog: false
    };

    componentDidMount() {
        firebase.auth()
            .onAuthStateChanged(user => {
                if (user) {
                    this.handleAuth({ user })
                }
            })
    }
    handleAuth = async (authData) => {
        const box = await base.fetch('kevin', { context: this })
        if (!box.chef) {
            await base.post(this.state.pseudo, {
                data: authData.user.uid
            })
        }
    }
    authenticate = () => {
        const authProvider = new firebase.auth.FacebookAuthProvider()
        firebaseApp.auth()
            .signInWithPopup(authProvider)
            .then(this.handleAuth)
    }
    handleClick = (e) => {
        this.setState({ current: e.key });
    };
    onShow = () => {
        const isLog = !this.state.isLog
        this.setState({ isLog })
    };

    logOut = async () => {
        await firebase.auth().signOut()
        this.setState({ pseudo: null })
    }

    render() {

        return (
            <Menu onClick={this.handleClick} mode="horizontal" theme="dark">
                <Menu.Item key="mail">
                    <Link to="/"><img src={img} alt="unstar " width="30" height="30" /><strong> Unstar</strong></Link>
                </Menu.Item>
                <Menu.Item key="astronomie">
                    <Link to="/picture/astronomie">Picture of Astronomie</Link>
                </Menu.Item>
                <Menu.Item key="mars">
                    <Link to="/picture/mars">Picture of Mars</Link>
                </Menu.Item>
                <Menu.Item key="Collection">
                    <Link to="/collection">Collections</Link>
                </Menu.Item>
                <Menu.Item key="a">
                    <Link to="#" onClick={this.onShow}>
                        {
                            this.state.isLog ? <UserOutlined /> : 'Connexion'
                        }
                        {
                            this.state.isLog ? 'Deconnexion' : ''
                        }
                    </Link>
                </Menu.Item>
            </Menu >
        );
    }
}

export default Navbar