import { Button, Menu, Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
import React, { FC } from "react";
import { Link, useHistory } from "react-router-dom";
type P = {
  user: string;
  className: string;
};

const UserMenu: FC<P> = React.memo((props) => {
  const history = useHistory();
  const menu = (
    <Menu>
      <Menu.Item
        onClick={() => {
          localStorage.setItem("x-token", "");
          history.push("/");
        }}
      >
        <span>注销</span>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className={props.className}>
      {props.user === "" ? (
        <Button>
          <Link to="/">登录</Link>
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
