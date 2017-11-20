import React from 'react';
import Todo from './Todo';

export default function TodoList(props) {
	return (
		<div id="todo-list">
			<Todo task='Mow the Lawn' />
			<Todo task='Clean Gutters' />
			<Todo task='Pick up leaves' />
			<Todo task='Edge Lawn' />
		</div>
	);
}