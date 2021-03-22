import React, { Component } from 'react'
import './PictureMars.css'
import { DatePicker, Space } from 'antd';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import { fetchMarsPicture } from '../../api/fetchNasaApi';
import ListImg from '../ListImg/ListImg';
import { Row } from 'antd';

class PictureMars extends Component {
    state = {
        date: moment(Date.now()).format('yyyy-MM-DD'),
        pictures: {},
        data: false,
        from: 'mars'
    }

    handleDateChange = (e) => {
        const formatDate = moment(e._d).format('yyyy-MM-DD')
        this.setState({ date: formatDate }, () => {
            fetchMarsPicture(this.state.date)
                .then((res) => {
                    const picture = res.photos
                    this.setState({ pictures: picture, data: true })
                })
        })
    }
    render() {
        const pic = Object
            .keys(this.state.pictures)
            .map(item => (
                <ListImg img={this.state.pictures[item].img_src} key={item} from={this.state.from} pics={this.state.pictures} />
            ))

        return (
            <div className="mars-pict-header text-center col-12 ">
                <h2 >Photos de Mars</h2>
                <p >Filtrer par Date : </p>
                <Space direction="vertical" size={12}>
                    <DatePicker defaultValue={moment(this.state.date)} onChange={this.handleDateChange} />
                </Space>
                <Row gutter={16} className="mt-5">
                    {pic}
                </Row>
            </div>
        );
    }
}


export default PictureMars;