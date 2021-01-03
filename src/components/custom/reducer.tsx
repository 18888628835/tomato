import { ADD_TASK, UPDATE_TASK, SET_DESCRIPTION, SET_EDIT } from "./actionType";
type Todo = {
  edit: number[];
  todoList: number[];
  description: string;
};
export const initialState: Todo = {
  edit: [],
  todoList: [],
  description: "",
};
export const reducer = (
  state: any,
  action: { type: string; formData: any }
) => {
  switch (action.type) {
    case ADD_TASK:
      return { ...state, todoList: action.formData };
    case UPDATE_TASK:
      return { ...state, todoList: action.formData };
    case SET_DESCRIPTION:
      return { ...state, description: action.formData };
    case SET_EDIT:
      return { ...state, edit: action.formData };
    default:
      break;
  }
};
