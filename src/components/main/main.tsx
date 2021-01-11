import React from "react";
import styled from "styled-components";
const Wrap = styled.main`
  overflow: hidden;
  display: flex;
  padding: 20px;
  justify-content: space-around;
  @media (max-width: 600px) {
    flex-direction: column;
    justify-content: space-between;
  }
  > div {
    overflow: hidden;
    border: 1px solid #3333;
    border-radius: 10px;
    padding: 20px;
    @media (max-width: 600px) {
      flex: 1;
    }
    @media (min-width: 600px) {
      width: calc(50% - 8px);
    }

    margin-bottom: 10px;
  }
`;
const Main = React.memo((props: { children: React.ReactNode }) => {
  return <Wrap>{props.children}</Wrap>;
});

export default Main;
