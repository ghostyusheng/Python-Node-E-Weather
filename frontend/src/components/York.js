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
                 country: data.country,
                 lat: data.lat,
                 lon: data.lon,
                 name: data.name,
                 state: data.state,
             });
             that.forceUpdate()
         })
         .catch(function (error) {
             console.log(error);
         })
         .finally(function () {
             console.log('force update!', that)
             that.forceUpdate()
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
              <div className='home-header-name'>
                <div className='home-header-english'>
                  Yusheng Zhang
                </div>
                <div className='home-header-chinese'>
                 yusheng
                </div>
              </div>
              <div className='home-header-content'>
                <div className='home-header-left'>
                    <Search placeholder="input search text" onSearch={this.onSearch} enterButton />

                  <p>
            <Card
            style={{
              width: 300,
            }}
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
                <b>{console.log('加载',this.state)}</b>
            <Meta
              avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
              title={this.state && this.state.name? this.state.name : 'default'}
              description="This is the description"
            />
          </Card>

                </p>
                </div>
            <div className='home-header-right'>
              <img height="200" width="200" src="avt2.jpg" />
              <div className='home-header-right-mail'>
                <MailOutlined />&nbsp;
                <a target="_blank" href="mailto:ghostyusheng@gmail.com">ghostyusheng@gmail.com</a>
              </div>
            </div>
          </div>
        </div>
        <div className="home-icons-motto">
          <div>
            <a target="_blank" href="cv.pdf"><img height="50" src="cv.png"></img></a>
            <a target="_blank" href="https://github.com/ghostyusheng"><GithubOutlined style={{fontSize: '40px'}} /></a>
          </div>
          <div>
            "If you afraid of failure, you won't get very far." - Steve Jobs<br/>
            "Believe can move mountain."
          </div>
        </div>
        </div>
        )



        const items = [
          {
            key: '1',
            label: 'Home',
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
