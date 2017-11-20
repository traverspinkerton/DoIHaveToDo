import React from 'react';

const Todo = (props) => {
	return (
		<div className="todo">
			<input type="checkbox" /> 
			<p className="task">{props.task}</p>
		</div>
		
	);
}


export default Todo;