import React, { Component } from 'react'
import { Card } from 'antd';
import { Col } from 'antd';
import './StoreImg.css'

class StoreImg extends Component {
    render() {
        return (
            <Col className="gutter-row" span={6} style={{ margin: ' 5px 0px 5px 0px' }}>
                <Card hoverable style={{ width: "100%", height: "100%" }}>
                    <img alt={this.props.key} src={this.props.img} width="100%" min-height="60%" max-height="70%" />
                    <div className="add-to-fav">
                    </div>
                </Card>
            </Col>
        );
    }
}
export default StoreImg;