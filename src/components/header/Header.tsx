import React, { FC } from "react";
import styled from "styled-components";
import { Svg } from "./svg";
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
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Header: FC = React.memo((props) => {
  return (
    <Wrapper>
      <div className="logo">
        <Svg iconName="fanqie" />
        番茄闹钟
      </div>
      {props.children}
    </Wrapper>
  );
});

export default Header;
