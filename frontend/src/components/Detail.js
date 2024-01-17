import React, { Component } from 'react';
import { render } from 'react-dom';

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

    render() {
        return (
            <div style={{ width: '500px', height: '950px' }}>
                1111
            </div>
            
        );
    }
}
