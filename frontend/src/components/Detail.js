import React, { Component } from 'react';
import { Button } from 'antd';
import { render } from 'react-dom';
import Cookies from 'universal-cookie';
import {Link} from 'react-router-dom';
const cookies = new Cookies(null, { path: '/' });


export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            country: '',
            lat: 0,
            lon: 0,
            name: '',
            state: '',
        };
    }

    dt = (i) => {
        let date = new Date(i * 1000);
        let Y = date.getFullYear() + '-';
        let M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        let D = date.getDate() + ' ';
        let h = date.getHours() + ':';
        let m = date.getMinutes() + ':';
        let s = date.getSeconds();
        let dt = Y + M + D;
        return dt
    }

    degToCompass(num) {
        var val = Math.floor((num / 22.5) + 0.5);
        var arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        return arr[(val % 16)];
    }

    render() {
        const day0_3 = cookies.get('day0_3');
        const day4_7 = cookies.get('day4_7');
        let dayAll = day0_3
        dayAll.daily = day0_3.daily.concat(day4_7)
        console.log('datall', dayAll)
        return (
            <div className='container'>
                <div className='detail-title'>
                    {dayAll.country} {dayAll.state} {dayAll.name}
                </div>
                <div className='week'>
                    {
                        dayAll.daily.map(i => 
                            (
                            <div className='week-day'>
                                <div>{this.dt(i.dt)}</div>
                                <div>
                                    <img src={`https://openweathermap.org/img/wn/${i.weather[0].icon}@2x.png`} />
                                </div>
                                <div>{`${i.temp.min}℃ ~ ${i.temp.max}℃`}</div>
                                <div>wind direction: {this.degToCompass(i.wind_deg)}</div>
                                <div>humidity: {i.humidity}%</div>
                                <div>pressure: {i.pressure}hPa</div>
                            </div>)
                        )
                    }
                </div>
                <Link to="/home">
                    <Button className='return-button' type="primary">return</Button>
                </Link>
            </div>
            
        );
    }
}
