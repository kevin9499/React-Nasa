
import { Button, Row } from 'antd';
import React, { Component } from 'react'
import StoreImg from '../StoreImg/StoreImg';

class Collection extends Component {
    state = {
        pic: {}
    }
    loadFromLocal = (style) => {
        let storage = JSON.parse(localStorage.getItem('pictures'));
        if (storage !== null) {
            if (style === 'astronomie') {
                const picture = { ...storage.pictures.astronomie }
                this.setState({ pic: picture })
            } else if (style === 'mars') {
                const picture = { ...storage.pictures.mars }
                this.setState({ pic: picture })
            }
        }
    }
    render() {
        const pic = Object
            .keys(this.state.pic)
            .map(item => {
                return <StoreImg img={this.state.pic[item]} />
            })

        return (
            <>
                <div className="home-root">
                    <Button type="primary" className="btn-discover col-2" onClick={() => this.loadFromLocal('mars')}>Voir les photos de Mars</Button>
                    <Button type="primary" className="btn-discover mt-1 col-2" onClick={() => this.loadFromLocal('astronomie')}>Voir les photos d'Astronomie</Button>
                </div>
                <Row gutter={16} className="mt-5">
                    {pic}
                </Row>
            </>
        );
    }
}
export default Collection