import React, { Component } from 'react';

export default class Todo extends Component {
	state = {
		task: this.props.task || ''
	}

	render() {
		return (
			<div className="todo">
				<input type="checkbox" onChange={() => this.props.handleStatusChange(this.props.task)} /> 
				<input 
					type="text" 
					className="task" 
					value={this.state.task} 
					onChange={e=>this.setState({task:e.target.value})}
					maxLength="75"
				/>
				<i onClick={() => this.props.handleTodoDelete(this.props.task)} className="fa fa-bomb todo-del" />
			</div>
			
		);		
	}
}

