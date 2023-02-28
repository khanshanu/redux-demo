import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../redux/reducer";
import TodoList from "./TodoList"

const AddTodo = () => {
	const [input, setInput] = useState('');
	const [update, setUpdate] = useState({});
	const dispatch = useDispatch();
	const todos = useSelector((state)=>{
    	return state.todo;
	});
	const handleSubmit = (event) => {
		event.preventDefault();
		if(input.trim().length === 0)
		{
			alert("Enter a task before adding !!");
			setInput("");
			return;
		}
		dispatch(addTodo({name: input})
		);
		setInput("");
	};
	const handleUpdateSubmit = (event)=>{
	  event.preventDefault();
	  dispatch(updateTodo({ id: update.id, name: input  }));
      setInput("");
      setUpdate({});
	}
	const handleUpdateTask = (todo)=>{
		setInput(todo.name);
		setUpdate({ completd: true, id: todo.id });
	}
	return (
    <div className="add-todo">
      <input
        type="text"
        className="task-input"
        placeholder="Add task"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />
      <button
        className="task-button"
        onClick={!update?.completd ? handleSubmit : handleUpdateSubmit}
      >
        {!update?.completd ? "Add" : "Update"}
      </button>
      <ul className="tasks-list">
        {todos?.map((todo) => (
          <TodoList
            id={todo.id}
            title={todo.name}
            updateTask={() => handleUpdateTask(todo)}
          />
        ))}
      </ul>
    </div>
  );
};

export default AddTodo;