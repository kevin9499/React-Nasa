import React from 'react'
import { HeartTwoTone } from '@ant-design/icons';
import './FooterBar.css'

export default function FooterBar() {
    return (
        <div className="col-12">
            <p>Unstar &copy; 2020 &bull; built with <HeartTwoTone twoToneColor="#eb2f96" /> in Paris, Image can be copyrighted.</p>
        </div>
    )
}