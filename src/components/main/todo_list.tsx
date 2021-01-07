import React, { FC } from "react";
import { Checkbox, Collapse } from "antd";
import styled from "styled-components";
import { DeleteOutlined, EnterOutlined } from "@ant-design/icons";
import { SET_EDIT } from "../custom/actionType";
import { ParamsDispatch } from "../../config/type";
const { Panel } = Collapse;
const Wrapper = styled.div`
  overflow-y: auto;
  max-height: 445px;
  overflow-x: hidden;
  > div {
    display: flex;
    border-bottom: 1px solid #3333;
    padding: 8px 0;
    &:hover {
      background-color: #fff3d2;
    }
    .describe {
      margin-left: 16px;
    }
    .input {
      border: 0;
      height: 20px;
      outline: none;
      background-color: transparent;
      color: grey;
    }
  }
  .centerLine {
    text-decoration: line-through;
    color: gainsboro;
  }
`;
type P = {
  todoList: any[];
  onUpdateTask: (id: number, params: unknown) => void;
  edit: number[];
  dispatch: (params: ParamsDispatch) => void;
};
const getUnDeleted = (data: any[]) => {
  return data.filter((d) => {
    return d.deleted === false;
  });
};
const getUnCompleted = (data: any[]) => {
  return getUnDeleted(data).filter((d) => {
    return d.completed === false;
  });
};
const getCompleted = (data: any[]) => {
  return getUnDeleted(data).filter((d) => {
    return d.completed === true;
  });
};

const Todo_list: FC<P> = (props) => {
  const { todoList, onUpdateTask, dispatch, edit } = props;
  const editInput = (description: string, id: number) => {
    return (
      <>
        <input
          className="input"
          autoFocus
          defaultValue={description}
          onKeyUp={(e: React.KeyboardEvent) => {
            if (e.key === "Enter") {
              onUpdateTask(id, {
                description: (e.target as HTMLInputElement).value,
              });
              dispatch({ type: SET_EDIT, formData: [] });
            }
          }}
          onBlur={(e) => {
            onUpdateTask(id, { description: e.target.value });
          }}
        />
        <span>
          <EnterOutlined
            style={{ cursor: "pointer", color: "grey" }}
            onClick={(e) => {
              dispatch({ type: SET_EDIT, formData: [] });
            }}
          />
          <DeleteOutlined
            style={{ color: "grey", margin: "0 10px" }}
            onClick={() => {
              onUpdateTask(id, { deleted: true });
            }}
          />
        </span>
      </>
    );
  };
  const data = (todoList: any[]) => {
    return todoList.map((item) => {
      return (
        <div
          key={item.id}
          className={item.completed === true ? "centerLine" : ""}
        >
          <Checkbox
            checked={item.completed}
            onChange={(e) => {
              onUpdateTask(item.id, { completed: e.target.checked });
            }}
          />
          <span
            className="describe"
            onDoubleClick={() => {
              dispatch({ type: SET_EDIT, formData: [item.id] });
            }}
          >
            {edit[0] === item.id
              ? editInput(item.description, item.id)
              : item.description}
          </span>
        </div>
      );
    });
  };
  return (
    <Wrapper>
      {data(getUnCompleted(todoList))}
      <Collapse
        style={{ border: "none", background: "none" }}
        defaultActiveKey={["1"]}
        ghost={true}
      >
        <Panel header="最近完成的" key="1">
          {data(getCompleted(todoList))}
        </Panel>
      </Collapse>
    </Wrapper>
  );
};

export default Todo_list;
