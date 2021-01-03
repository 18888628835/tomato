import React from "react";
import styled from "styled-components";
const Wrap = styled.main`
  padding: 20px 20px;
  height: 500px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  > div {
    overflow: hidden;
    border: 1px solid #3333;
    padding: 20px;
    flex: 1;
    margin-left: 10px;
  }
`;
const Main = (props: { children: React.ReactNode }) => {
  return <Wrap>{props.children}</Wrap>;
};

export default Main;
