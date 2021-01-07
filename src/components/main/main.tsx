import React from "react";
import styled from "styled-components";
const Wrap = styled.main`
  padding: 20px 20px;
  overflow: hidden;
  @media (min-width: 600px) {
    display: flex;
    justify-content: space-between;
  }
  > div {
    overflow: hidden;
    border: 1px solid #3333;
    border-radius: 10px;
    padding: 20px;
    flex: 1;
    @media (min-width: 600px) {
      margin-left: 10px;
    }
    margin-bottom: 20px;
  }
`;
const Main = (props: { children: React.ReactNode }) => {
  return <Wrap>{props.children}</Wrap>;
};

export default Main;
