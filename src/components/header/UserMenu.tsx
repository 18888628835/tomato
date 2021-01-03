import { Button, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import React, { FC } from "react";
import { Link } from "react-router-dom";
type P = {
  user: string;
  onLogout: (prams: string) => void;
  className: string;
};

const UserMenu: FC<P> = (props) => {
  const menu = (
    <Menu>
      <Menu.Item danger>
        <span
          onClick={() => {
            props.onLogout("");
            localStorage.setItem("x-token", "");
          }}
        >
          注销
        </span>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className={props.className}>
      {props.user === "" ? (
        <Button>
          <Link to="/login">登录</Link>
        </Button>
      ) : (
        <Dropdown overlay={menu}>
          <span className="ant-dropdown-link">
            {props.user} <DownOutlined />
          </span>
        </Dropdown>
      )}
    </div>
  );
};

export default UserMenu;
