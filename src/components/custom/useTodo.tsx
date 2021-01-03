import { useReducer } from "react";
import ajax from "../../config/axiosConfig";
import { reducer, initialState } from "./reducer";
import { ADD_TASK, UPDATE_TASK, SET_DESCRIPTION } from "../custom/actionType";
const useTodo = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { edit, todoList, description } = state;
  /**
   * getUserName用来获取用户姓名
   * getTodoList用来获取任务列表
   * onAddTask用来向服务器提交任务
   * onUpdateTask就是修改任务的各种情况
   */
  const onAddTask = async () => {
    const response = await ajax
      .post("todos", {
        description: description,
      })
      .then(null, (error) => console.log(error));
    if (response) {
      console.log(response);
      dispatch({
        type: ADD_TASK,
        formData: [response.data.resource, ...todoList],
      });
      dispatch({
        type: SET_DESCRIPTION,
        formData: "",
      });
    }
  };
  const onUpdateTask = async (id: number, params: unknown) => {
    const response = await ajax.put(`todos/${id}`, params);
    const newList = todoList.map((item: any) => {
      if (item.id === id) {
        return response.data.resource;
      }
      return item;
    });
    dispatch({ type: UPDATE_TASK, formData: newList });
  };
  const getTodoList = async () => {
    const response = await ajax
      .get("todos")
      .then(null, (error) => console.log(error));
    if (response) {
      dispatch({ type: UPDATE_TASK, formData: response.data.resources });
    }
  };
  return {
    getTodoList,
    onAddTask,
    edit,
    todoList,
    description,
    dispatch,
    onUpdateTask,
  };
};

export default useTodo;
