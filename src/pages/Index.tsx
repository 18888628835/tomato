import React, { useEffect, useState } from "react";
import ajax from "../config/axiosConfig";
import Header from "../components/header/Header";
import Main from "../components/main/main";
import TaskDescription from "../components/main/task_description";
import TodoList from "../components/main/todo_list";
import UserMenu from "../components/header/UserMenu";
import Tomatoes from "../components/main/tomato";
import useTodo from "../components/custom/useTodo";
import { UPDATE_TASK } from "../components/custom/actionType";
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
    const response = await ajax("/me").then(null, (error) =>
      console.log(error.response.data.errors)
    );
    if (response) setUser(response.data.account);
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
          <TodoList {...{ todoList, onUpdateTask, edit, dispatch }}></TodoList>
        </div>
      </Main>
    </>
  );
};

export default Index;
