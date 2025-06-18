import React, { Component } from 'react'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import './index.css'

export default class Login extends Component {
    
  state={
    formTypes: 'login'
  }
  switchForm=(values)=>{
    this.setState({
        formTypes:values
    })

  }

  render() {
    return (
      <div className="form-wrap">
            <div>
                {this.state.formTypes==='login'?<LoginForm switchForm={this.switchForm}></LoginForm>:<RegisterForm switchForm={this.switchForm}></RegisterForm>}
                
            </div>
      </div>
    )
  }
}
