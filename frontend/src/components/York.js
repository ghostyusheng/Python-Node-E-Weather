import React, { Component } from 'react';
import { render } from 'react-dom';
import { Input, Tabs } from 'antd';
import { TabsProps } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
const { Meta } = Card;


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


import {
  GithubOutlined,
  MailOutlined,
} from '@ant-design/icons';

import axios from 'axios';

const { Search } = Input;

const onChange = (key) => {
  console.log(key);
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default class York extends Component {
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
    onSearch = (value, _e, info) => {
        const that = this
         axios.get('/proxy/city/search?q='+value)
         .then(function (response) {
             console.log(response.data.data)
             const data = response.data.data
             console.log(data)
             that.setState({
                 country: data.basic.country,
                 lat: data.lat,
                 lon: data.lon,
                 name: data.basic.name,
                 state: data.basic.state,
                 icon: data.detail.current.weather[0].icon,
             });
         })
         .catch(function (error) {
             console.log(error);
         })
         .finally(function () {
         });
    }


    state = { gold:0, log:'...', money: 0, visible: false, open: false};



    showModal = () => {
        this.setState({
          visible: true,
        });

    };

    handleOpen = (k, e) => {
      if (k == 4) {
        this.setState({
          open: true})
      }
    }

    handleClose = e => {
      this.setState({
        open: false})
    }

    handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
    };



    render() {
            const Home = (
          <div className="home">
            <div className='home-header'>
              <div className='home-header-content'>
                <div className='home-header-left'>
                    <Search placeholder="input search text" onSearch={this.onSearch} enterButton />
                    {this.state && this.state.icon ? 
                      <Card
                      className='card'
                      style={{
                        width: 300,
                      }}
                      cover={
                        <img
                          className='card-img'
                          alt="example"
                          src={`https://openweathermap.org/img/wn/${this.state && this.state.icon ? this.state.icon : '01d'}@2x.png`} 
                        />
                      }
                      actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                      ]}
                    >
                      <Meta
                        avatar={<Avatar src={`https://openweathermap.org/img/wn/${this.state.icon}@2x.png`} />}
                        title={this.state.name}
                        description={this.state.country+" "+this.state.state}
                      />
                    </Card>
                    :
                    <></>
    }

                </div>
            <div className='home-header-right'>
              <img height="160" width="160" src="avt2.jpg" />
              <div className='home-header-right-mail'>
                <MailOutlined />&nbsp;
                <a target="_blank" href="mailto:ghostyusheng@gmail.com">ghostyusheng@gmail.com</a>
              </div>
              <div className="home-icons-motto">
                <div>
                  <a target="_blank" href="cv.pdf"><img height="50" src="cv.png"></img></a>
                  <a target="_blank" href="https://github.com/ghostyusheng"><GithubOutlined style={{fontSize: '40px'}} /></a>
                </div>
                <div>
                  "If you afraid of failure, you won't get very far." - Steve Jobs<br/>
                </div>
              </div>
        </div>
            </div>
          </div>
        </div>
        )



        const items = [
          {
            key: '1',
            label: 'E-Weather Search',
            children: Home,
          },
        ];
        open = this.state.open
        
        return (
            <div style={{ width: '500px', height: '950px' }}>
              <Tabs onTabClick={this.handleOpen} size="large" className="mytab" closeIcon="null" defaultActiveKey="1" items={items} onChange={onChange} />
            </div>
             
        );
    }
}
