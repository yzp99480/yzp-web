import React, { Component } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button,  Form, Input,  } from 'antd';
import './index.css'
export default class LoginForm extends Component {
     onFinish = values => {
    if(values.username==='123'&&values.password==='123'){
      alert("登录成功")     
    }
    else{
      alert("用户名或密码不正确")
    }
  };
  toggleForm=()=>{
    this.props.switchForm('register')
  }

  render() {
    return (
      <div>
        <div className="form-header">
            <span className="column">登录</span>
            <span onClick={this.toggleForm}>账号注册</span>
        </div>
        <div className="form-content">
            <Form
                name="login"
                initialValues={{ remember: true }}
                style={{ maxWidth: 360 }}
                onFinish={this.onFinish}
                >
                <Form.Item
                    name="username"
                    rules={[{ required: true, message: 'Please input your Username!' }]}
                >
                    <Input prefix={<UserOutlined />} placeholder="Username" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Please input your Password!' }]}
                >
                    <Input prefix={<LockOutlined />} type="password" placeholder="Password" />
                </Form.Item>      
                <Form.Item>
                    <Button block type="primary" htmlType="submit">
                    登录
                    </Button>
                </Form.Item>
            </Form>
        </div>
      </div>
    )
  }
}
