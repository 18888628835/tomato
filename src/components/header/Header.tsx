import React, { FC } from "react";
import styled from "styled-components";
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
const Header: FC = (props) => {
  return (
    <Wrapper>
      <div className="logo">logo</div>
      {props.children}
    </Wrapper>
  );
};

export default Header;
