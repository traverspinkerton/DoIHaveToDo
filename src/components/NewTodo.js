import React, { Component } from 'react';

class NewTodo extends Component {
	state = {
		newTodo: ''
	}

	handleFormSubmit = e => {
		e.preventDefault();

		// set parent state via prop callback
		const newTodo = {
			task: this.state.newTodo,
			status: 'incomplete'
		}
		this.props.handleNewTodo(newTodo);
		this.setState({ newTodo: ''});
		this.props.handleCreatingTodo();
	}

	render() {
		if (this.props.creatingTodo) {
			return (
				<form className="newtodo-form" onSubmit={this.handleFormSubmit}>
					<input 
						value={this.state.newTodo} 
						onChange={e=>this.setState({newTodo:e.target.value})} 
						className="task newtodo"
						autoFocus 
					/> 
				</form>
			);
		} else {
			return <button className="newtodo" onClick={() => this.props.handleCreatingTodo()}>New Todo</button> 
		}

	}
}

export default NewTodo;