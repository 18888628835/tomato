import React, { FC } from "react";
import { Input } from "antd";
import { EnterOutlined } from "@ant-design/icons";
type P = {
  description: string;
  setDescription: (description: string) => void;
  onAddTask: () => void;
};
const Task_description: FC<P> = (props) => {
  const { description, setDescription, onAddTask } = props;
  return (
    <>
      <Input
        placeholder="新增任务"
        onChange={(e) => {
          setDescription(e.target.value);
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
};

export default Task_description;
