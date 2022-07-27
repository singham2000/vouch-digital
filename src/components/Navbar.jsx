import React from 'react';
import { Layout } from 'antd';
import { Button } from 'antd';
import {Space} from 'antd';
const { Header } = Layout;

const Navbar = () => {
    return (
        <Header>
            <div className="logo">
                ATools <div className="circle"></div>
            </div>
            <div className="btns">
                <Space>
                <Button className='btn width  greyblue'>Start Free Trial</Button>
                <Button className='btn width  orange'>Login</Button>
                </Space>
            </div>
        </Header>
    )
}

export default Navbar 