import React, { FC, useState } from "react";
import { Checkbox } from "antd";
import styled from "styled-components";
const Div = styled.div`
  .through {
    text-decoration: line-through;
  }
`;
type P = {
  description: string;
};
const Todo_list_item: FC<P> = (props) => {
  const [flag, setFlag] = useState<boolean>(false);
  const onChange = () => {
    setFlag(!flag);
  };
  return (
    <Div>
      <Checkbox onChange={onChange}></Checkbox>
      <span className={flag ? "through" : ""}>{props.description}</span>
    </Div>
  );
};

export default Todo_list_item;
