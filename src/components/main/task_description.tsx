import React, { FC } from "react";
import { Input } from "antd";
import { EnterOutlined } from "@ant-design/icons";
import { SET_DESCRIPTION } from "../custom/actionType";
import { ParamsDispatch } from "../../config/type";
type P = {
  description: string;
  dispatch: (params: ParamsDispatch) => void;
  onAddTask: () => void;
};
const Task_description: FC<P> = React.memo((props) => {
  const { description, dispatch, onAddTask } = props;
  return (
    <>
      <Input
        placeholder="新增任务"
        onChange={(e) => {
          dispatch({ type: SET_DESCRIPTION, formData: e.target.value });
        }}
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            onAddTask();
          }
        }}
        value={description}
        suffix={<EnterOutlined onClick={() => onAddTask()} />}
      />
    </>
  );
});

export default Task_description;
