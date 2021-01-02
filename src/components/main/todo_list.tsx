import React, { FC } from "react";
import { Input } from "antd";
import { EnterOutlined } from "@ant-design/icons";
import styled from "styled-components";
import TodoListItem from "./todo_list_item";
const TodoList = styled.div`
  padding: 20px;
  border: 1px solid #eeeeee;
  margin: 64px;
`;
type P = {
  onSubmit: () => void;
  onEnter: any;
  description: any;
  setDescription: any;
  todo: any;
};
const todo_list: FC<P> = (props) => {
  return (
    <TodoList>
      <Input
        placeholder="输入后按回车可以新增任务"
        suffix={
          <EnterOutlined
            onClick={() => {
              props.onSubmit();
            }}
          />
        }
        onPressEnter={props.onEnter}
        value={props.description}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          props.setDescription(e.target.value);
        }}
      />
      <div>
        {props.todo.map(({ description, id }: any) => {
          return <TodoListItem key={id} {...{ description }} />;
        })}
      </div>
    </TodoList>
  );
};

export default todo_list;
