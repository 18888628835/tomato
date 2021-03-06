import React, { useState } from "react";
import { Input, Button, Space } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ajax from "../components/config/axiosConfig";
import { Registration } from "../components/config/type";
import { UserOutlined } from "@ant-design/icons";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const Wrap = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 345px;
  margin: 0 auto;
  > h1 {
    text-align: center;
  }
  .signUp {
    width: 100%;
    margin-bottom: 20px;
  }
`;
const SignUp = () => {
  const [signUpData, setSignUpData] = useState<Registration>({
    account: "",
    password: "",
    password_confirmation: "",
  });
  const onChange = (data: Partial<Registration>) => {
    setSignUpData((signUpData: Registration) => {
      return { ...signUpData, ...data };
    });
  };
  const onSubmit = async () => {
    const { account, password, password_confirmation } = signUpData;
    try {
      await ajax.post("sign_up/user", {
        account,
        password,
        password_confirmation,
      });
      alert("注册成功");
    } catch (error) {
      alert(error.response.data.errors.account[0]);
    }
  };
  return (
    <Wrap>
      <h1>注册番茄土豆！</h1>
      <Space direction="vertical" size="large">
        <Input
          size="large"
          placeholder="请输入账号"
          prefix={<UserOutlined />}
          onBlur={(e) => {
            onChange({ account: e.target.value });
          }}
        />
        <Input.Password
          size="large"
          placeholder="请输入密码"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          onBlur={(e) => {
            onChange({ password: e.target.value });
          }}
        />
        <Input.Password
          size="large"
          placeholder="请输入密码"
          iconRender={(visible) =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
          onBlur={(e) => {
            onChange({ password_confirmation: e.target.value });
          }}
        />
        <Button className="signUp" onClick={onSubmit}>
          完成注册
        </Button>
      </Space>
      <span>
        如果您有账号，请
        <Link to="/">
          <Button type="link">登录</Button>
        </Link>
      </span>
    </Wrap>
  );
};

export default SignUp;
