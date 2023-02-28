import { createSlice } from "@reduxjs/toolkit";
const initialState = [];

const todoReducer = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //here we will write our reducer
    //Adding todos
    addTodo: (state, action) => {
      const newTask = {
        id: new Date(),
        name: action.payload.name
    }
    state.push(newTask);
    },
    //remove todos
    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    //update todos
    updateTodo: (state, action) => {
        return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            name: action.payload.name,
          };
        }
        return todo;
      });
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  updateTodo,
} = todoReducer.actions;
export default todoReducer.reducer;
