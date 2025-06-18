import React, { Component } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button,  Form, Input,  } from 'antd';
import './index.css'
export default class RegisterForm extends Component {
     onFinish = values => {
    console.log('Received values of form: ', values);
    alert("注册成功")
  };
   toggleForm=()=>{
    this.props.switchForm('login')
  }
  render() {
    return (
      <div>
        <div className="form-header">
            <span className="column">注册</span>
            <span onClick={this.toggleForm}>登录</span>
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
                 <Form.Item
                    name="passwords"
                    rules={[
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve();
                            }
                            return Promise.reject(new Error('两次输入密码不一致'));
                            },
                        }),
                        ]}
                >
                    <Input prefix={<LockOutlined />} type="password" placeholder="Passwords" />
                </Form.Item>    
                <Form.Item>
                    <Button block type="primary" htmlType="submit">
                    注册
                    </Button>
                </Form.Item>
            </Form>
        </div>
      </div>
    )
  }
}
