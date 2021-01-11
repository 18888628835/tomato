import React, { useEffect, useState } from "react";
import ajax from "../config/axiosConfig";
import Header from "../components/header/Header";
import Main from "../components/main/main";
import TaskDescription from "../components/main/task_description";
import TodoList from "../components/main/todo_list";
import UserMenu from "../components/header/UserMenu";
import useTodo from "../components/custom/useTodo";
import Tomatoes from "../components/main/tomatoes";
import { Divider } from "antd";
import Statistics from "../components/main/ statistics";
import useTomato from "../components/custom/useTomato";
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
  const {
    startTomatoes,
    getUnFinishTomato,
    unFinishTomato,
    setUnFinishTomato,
    finishedGroup,
    finishTomato,
    finishedTomatoes,
    tomatoes,
  } = useTomato();
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
      alert(error);
    }
  };

  return (
    <>
      <Header>
        <UserMenu className="userMenu" {...{ user }} />
      </Header>
      <Main>
        <div>
          <Tomatoes
            {...{
              startTomatoes,
              getUnFinishTomato,
              unFinishTomato,
              setUnFinishTomato,
              finishedGroup,
              finishTomato,
            }}
          />
        </div>
        <div>
          <TaskDescription {...{ description, dispatch, onAddTask }} />
          <Divider />
          <TodoList {...{ todoList, onUpdateTask, edit, dispatch }}></TodoList>
        </div>
      </Main>
      <Statistics {...{ finishedTomatoes, todoList, tomatoes }}></Statistics>
    </>
  );
};

export default Index;
