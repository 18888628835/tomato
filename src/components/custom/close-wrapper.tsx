import React, { FC } from "react";
import { message, Popconfirm } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import styled from "styled-components";
const Div = styled.div`
  width: 100%;
  border: 1px solid #d9d9d9;
  padding: 4px 11px;
  text-align: center;
  position: relative;
  .closeIcon {
    display: block;
    position: absolute;
    right: -5px;
    top: -5px;
    background-color: white;
  }
  .progress {
    background-color: #d9d9d9;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
  }
`;
const CloseWrapper: FC<{ finishTomato: (params: any) => void }> = (props) => {
  return (
    <Div>
      <Popconfirm
        title="确定要删除这个番茄吗?"
        onConfirm={() => {
          props.finishTomato({ aborted: true });
          message.error("删除成功");
        }}
        onCancel={() => {
          message.error("撤销删除");
        }}
        okText="删除"
        cancelText="撤销"
      >
        <CloseCircleOutlined className="closeIcon" />
      </Popconfirm>
      {props.children}
    </Div>
  );
};

export default CloseWrapper;
