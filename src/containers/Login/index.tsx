import React from "react";
import LoginForm  from '../../components/forms/LoginForm';
import { Form} from 'antd';

const Login = () => {
  const LoginFormWrap = Form.create({ name: 'login_form' })(LoginForm);
  return (
    <div className="login-wrapper">
      <LoginFormWrap/>
    </div>
  )
};

export default Login;
