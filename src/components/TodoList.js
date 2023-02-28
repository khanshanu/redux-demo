import React from 'react';
import { useDispatch } from "react-redux";
import { deleteTodo } from "../redux/reducer";

const TodoList = ({ id, title, updateTask }) => {
  	const dispatch = useDispatch();
	const removeTask=(id)=>{
		dispatch(deleteTodo({id: id}))
	}
	return (
		<li className="task-item" key={id}>			
				{title}			
				<button className="remove-task-button" onClick={()=>removeTask(id)}>Delete</button>
				<button className="update-task-button" onClick={()=>updateTask(id)}>edit</button>				
		</li>
	);
};

export default TodoList;