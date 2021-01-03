import React, { useEffect, useState } from "react";
import ajax from "../config/axiosConfig";
import Header from "../components/header/Header";
import Main from "../components/main/main";
import TaskDescription from "../components/main/task_description";
import TodoList from "../components/main/todo_list";

const Index = () => {
  const [user, setUser] = useState<string>("");
  const [description, setDescription] = useState("");
  const [todoList, setTodoList] = useState<any[]>([]);
  const [edit, setEdit] = useState<number[]>([]);
  const onClick = (prams: string) => {
    setUser(prams);
    setTodoList([]);
  };
  //第一次渲染的时候获取用户名字跟todo信息
  useEffect(() => {
    getUserName();
    getTodoList();
  }, []);
  /**
   * getUserName用来获取用户姓名
   * onAddTask用来向服务器提交任务
   * getTodoList用来获取任务列表
   * onUpdateTask就是修改任务的各种情况
   */
  const getUserName = async () => {
    const response = await ajax("/me").then(null, (error) =>
      console.log(error.response.data.errors)
    );
    if (response) setUser(response.data.account);
  };

  const onAddTask = async () => {
    const response = await ajax
      .post("todos", {
        description: description,
      })
      .then(null, (error) => console.log(error));
    if (response) {
      setTodoList([response.data.resource, ...todoList]);
      setDescription("");
    }
  };
  const getTodoList = async () => {
    const response = await ajax
      .get("todos")
      .then(null, (error) => console.log(error));
    if (response) setTodoList(response.data.resources);
  };
  const onUpdateTask = async (id: number, params: unknown) => {
    const response = await ajax.put(`todos/${id}`, params);
    const newList = todoList.map((item) => {
      if (item.id === id) {
        return response.data.resource;
      }
      return item;
    });
    await setTodoList(newList);
  };

  return (
    <>
      <Header {...{ user, onClick }} />
      <Main>
        <div>123</div>
        <div>
          <TaskDescription {...{ description, setDescription, onAddTask }} />
          <TodoList {...{ todoList, onUpdateTask, edit, setEdit }}></TodoList>
        </div>
      </Main>
    </>
  );
};

export default Index;
