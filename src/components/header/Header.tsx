import React, { FC } from "react";
import styled from "styled-components";
import UserMenu from "./UserMenu";
const Wrapper = styled.header`
  padding: 0 64px;
  display: flex;
  justify-content: space-between;
  height: 40px;
  border-bottom: 1px solid #eeeeee;
  .userMenu {
    display: flex;
    align-items: center;
  }
  .logo {
    line-height: 40px;
  }
`;
type P = {
  user: string;
  onClick: (prams: string) => void;
};
const Header: FC<P> = (props) => {
  return (
    <Wrapper>
      <div className="logo">logo</div>
      <UserMenu
        className="userMenu"
        user={props.user}
        onClick={props.onClick}
      />
    </Wrapper>
  );
};

export default Header;
