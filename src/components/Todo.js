import React from 'react';

const Todo = (props) => {
	return (
		<div className="todo">
			<input type="checkbox" /> {props.task}
		</div>
		
	);
}


export default Todo;