import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import { LoginMessage } from "../components/config/type";
import ajax from "../components/config/axiosConfig";

const Main = styled.main`
  max-width: 300px;
  margin: 0 auto;
  > h1 {
    text-align: center;
  }
  .login-button {
    > button {
      width: 100%;
    }
  }
`;
const Login = () => {
  const [loginMessage, setLoginMessage] = useState<LoginMessage>({
    account: "",
    password: "",
  });
  const history = useHistory();
  const onLogin = async () => {
    const { account, password } = loginMessage;
    try {
      await ajax.post("sign_in/user", {
        account,
        password,
      });
      await history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const onChange = (obj: Partial<LoginMessage>) => {
    setLoginMessage((mes) => {
      return { ...mes, ...obj };
    });
  };
  return (
    <Main>
      <h1>登录番茄土豆</h1>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={onLogin}
      >
        <Form.Item
          name="account"
          rules={[{ required: true, message: "请输入用户名!" }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="用户名"
            onBlur={(e) => {
              onChange({ account: e.target.value });
            }}
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[{ required: true, message: "请输入密码!" }]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="密码"
            onBlur={(e) => {
              onChange({ password: e.target.value });
            }}
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>记住密码</Checkbox>
          </Form.Item>
        </Form.Item>
        <div className="login-button">
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            登录
          </Button>
          Or <Link to="/signup">现在注册!</Link>
        </div>
      </Form>
    </Main>
  );
};
export default Login;
