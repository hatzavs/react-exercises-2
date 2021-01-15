import React, { useState } from 'react';
import './Todo.scss';

function Todo() {
	const [tasks, setTasks] = useState([]);
	const [myInput, setInput] = useState('');

	function typing(e) {
		setInput(e.target.value);
	}

	function addTask(e) {
		e.preventDefault();
		if (myInput) setTasks([...tasks, myInput]);
		setInput('');
	}

	function deleteTask(e) {
		const taskToDelete = e.target.parentNode.textContent.split('')[1];
		const indexToDelete = tasks.findIndex(task => task === taskToDelete);
		const newTasks = [...tasks];
		newTasks.splice(indexToDelete, 1);
		setTasks(newTasks);

	}

	return (
		<div className="Todo">
			<h3>Todo List:</h3>
			<p>Make a Todo list (add & delete options):</p>
			<form onSubmit={addTask}>
				<input placeholder="Your task..." onChange={typing} value={myInput}/> <button>Add task</button>
			</form>
			<ul>
				{tasks.map((task, index) => {
					return <li key={index}><button className="delete" onClick={deleteTask}>x</button>{task}</li>
				})}
			</ul>
		</div>
	)
}

export default Todo;
