import React from 'react';
import Todo from './Todo';

export default function TodoList({todos, handleTodoDelete, handleStatusChange}) {
	return (
		<div id="todo-list">
			{todos.map(todo => <Todo key={todo.task} task={todo.task} handleTodoDelete={handleTodoDelete} handleStatusChange={handleStatusChange} /> )}
		</div>
	);
}