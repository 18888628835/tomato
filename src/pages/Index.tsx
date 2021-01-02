import React, { FC, useEffect, useState } from "react";
import ajax from "../config/axiosConfig";
import Header from "../components/header/Header";
import TodoList from "../components/main/todo_list";
const Index: FC = () => {
  const [user, setUser] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [todo, setTodo] = useState<any[]>([]);
  const onClick = (prams: string) => {
    setUser(prams);
  };
  useEffect(() => {
    getMe();
    getTodo();
  }, []);
  const getMe = async () => {
    //获取用户信息
    try {
      const response = await ajax("/me");
      setUser(response.data.account);
    } catch (error) {
      console.log(error.response.data.errors);
    }
  };
  //按enter键后触发提交事件
  const onEnter: React.KeyboardEventHandler<HTMLInputElement> = async (e) => {
    if (e.key === "Enter" && description !== "") {
      onSubmit();
    }
  };
  const getTodo = async () => {
    //获取任务列表
    await ajax.get("todos").then((response) => {
      setTodo(response.data.resources);
    });
  };
  const onSubmit = async () => {
    //提交信息
    const response = await ajax
      .post("todos", {
        description: description,
      })
      .then(null, (error) => {
        console.log(error);
      });
    if (response) setTodo([response.data.resource, ...todo]);
    setDescription("");
  };

  return (
    <>
      <Header {...{ user, onClick }} />
      <main>
        <TodoList
          {...{ description, onEnter, onSubmit, setDescription, todo }}
        />
      </main>
    </>
  );
};

export default Index;
