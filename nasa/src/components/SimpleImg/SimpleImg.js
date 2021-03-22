import React, { Component } from 'react'
import { Card } from 'antd';
import { Col } from 'antd';
import './SimpleImg.css'
import { PlusCircleOutlined } from '@ant-design/icons';

class SimpleImg extends Component {
    state = {}
    handleClick = (image_data) => {
        let from = this.props.from
        let storage = JSON.parse(window.localStorage.getItem('pictures'));
        if (storage == null) storage = {
            pictures: {
                mars: [],
                astronomie: []
            }
        };
        if (from === 'mars') {
            storage.pictures.mars.push(image_data)
        } else if (from === 'astronomie') {
            storage.pictures.astronomie.push(image_data)
        }
        window.localStorage.setItem('pictures', JSON.stringify(storage))
    }
    render() {
        console.log(this.props.img)
        const { Meta } = Card;
        return (
            <Col span={16} offset={8} className="mt-5">
                <Card
                    hoverable
                    style={{
                        width: "50%",
                        height: "50%"
                    }}>
                    <img src={this.props.img} width="100%" min-height="100%" alt='img' />
                    <Meta
                        title={`Title : ${this.props.title}`}
                        description={this.props.desc}
                    />
                    <div className="add-to-fav" onClick={() => this.handleClick(this.props.img)}>
                        <PlusCircleOutlined /> <p>Ajouter au favoris</p>
                    </div>
                </Card>
            </Col>
        );
    }
}

export default SimpleImg;