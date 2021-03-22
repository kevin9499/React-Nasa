import React, { Component } from 'react'
import './PictureAstronomie.css'
import { DatePicker, Space } from 'antd';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import { fetchAstroPicture } from '../../api/fetchNasaApi';
import SimpleImg from '../SimpleImg/SimpleImg';

class PictureAstronomie extends Component {
    state = {
        date: moment(Date.now()).format('yyyy-MM-DD'),
        pictures: null,
        from: 'astronomie'
    }

    handleDateChange = (e) => {
        const formatDate = moment(e._d).format('yyyy-MM-DD')
        this.setState({ date: formatDate }, () => {
            fetchAstroPicture(this.state.date)
                .then((res) => {
                    const picture = res
                    this.setState({ pictures: picture })
                })
        })
    }
    render() {
        const img = () => {
            if (this.state.pictures) {
                return <SimpleImg
                    from={this.state.from}
                    key={this.state.pictures.hdurl}
                    img={this.state.pictures.hdurl}
                    title={this.state.pictures.title}
                    desc={this.state.pictures.explanation} />
            }
        }

        return (
            <div className="mars-pict-root col-12 text-center" >
                <div className="mars-pict-header">
                    <h2 >Photos d'Astronomie</h2>
                    <p >Filtrer par Date : </p>
                    <Space direction="vertical" size={12}>
                        <DatePicker
                            defaultValue={moment(this.state.date)}
                            onChange={this.handleDateChange} />
                    </Space>
                    {img()}
                </div>
            </div>
        );
    }
}


export default PictureAstronomie;