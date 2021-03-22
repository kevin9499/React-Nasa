import React, { Component } from 'react'
import './Home.css'
import img from '../Navbar/asset/logo.png'
import { Button } from 'antd';
import { Link } from 'react-router-dom'

class Home extends Component {
    state = {}
    render() {
        return (
            <div className="home-root">
                <img src={img} alt="app logo" className="home-logo" />
                <h1 className="home-title">UNSTAR</h1>
                <h3 className="home-subtitle">Découvrir l'espace autrement</h3>
                <div className="discover-btn">
                    <Link to="/picture/mars"><Button type="primary" className="btn-discover">Découvrires Mars</Button></Link>
                    <Link to="/picture/astronomie"><Button type="primary" className="btn-discover">Découvrire l'astronomie</Button></Link>
                </div>
            </div>
        );
    }
}

export default Home;