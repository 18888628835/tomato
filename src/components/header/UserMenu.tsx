import { Button, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import React, { FC } from "react";
import { Link } from "react-router-dom";
type P = {
  user: string;
  className: string;
};

const UserMenu: FC<P> = React.memo((props) => {
  const menu = (
    <Menu>
      <Menu.Item danger={true}>
        <span
          onClick={() => {
            localStorage.setItem("x-token", "");
          }}
        >
          <Link to="login">注销</Link>
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
});

export default UserMenu;
