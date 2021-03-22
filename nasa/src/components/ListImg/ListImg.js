import React, { Component } from 'react'
import { Card } from 'antd';
import { Col } from 'antd';
import './ListImg.css'
import { PlusCircleOutlined } from '@ant-design/icons';

class ListImg extends Component {

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
        return (
            <Col className="gutter-row" span={6} style={{ margin: ' 5px 0px 5px 0px' }}>
                <Card hoverable style={{ width: "100%", height: "100%" }}>
                    <img alt={this.props.key} src={this.props.img} width="100%" min-height="100%" />
                    <div className="add-to-fav" onClick={() => this.handleClick(this.props.img)}>
                        <PlusCircleOutlined /> <p>Ajouter au favoris</p>
                    </div>
                </Card>
            </Col>
        );
    }
}
export default ListImg;