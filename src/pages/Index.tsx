import React, { useEffect, useState } from "react";
import ajax from "../config/axiosConfig";
import Header from "../components/header/Header";
import Main from "../components/main/main";
import TaskDescription from "../components/main/task_description";
import TodoList from "../components/main/todo_list";
import UserMenu from "../components/header/UserMenu";
import useTodo from "../components/custom/useTodo";
import { UPDATE_TASK } from "../components/custom/actionType";
import Tomatoes from "../components/main/tomatoes";
import { Divider } from "antd";
const Index = () => {
  const [user, setUser] = useState<string>("");
  const {
    edit,
    todoList,
    description,
    dispatch,
    getTodoList,
    onAddTask,
    onUpdateTask,
  } = useTodo();
  const onLogout = (prams: string) => {
    setUser(prams);
    dispatch({ type: UPDATE_TASK, formData: [] });
  };
  useEffect(() => {
    getUserName();
    getTodoList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserName = async () => {
    try {
      const response = await ajax("/me");
      await setUser(response.data.account);
    } catch (error) {
      console.error(error.response.data.error);
    }
  };

  return (
    <>
      <Header>
        <UserMenu className="userMenu" {...{ user, onLogout }} />
      </Header>
      <Main>
        <div>
          <Tomatoes />
        </div>
        <div>
          <TaskDescription {...{ description, dispatch, onAddTask }} />
          <Divider />
          <TodoList {...{ todoList, onUpdateTask, edit, dispatch }}></TodoList>
        </div>
      </Main>
    </>
  );
};

export default Index;
