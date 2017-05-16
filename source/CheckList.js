import React from 'react';

class CheckList extends React.Component {
	render(){
		let tasks = this.props.tasks.map((task)=>(
			<li className="checklist__task">
				<input type = "checkbox" defaultChecked={task.done} />
				{task.name}
				<a href = "#" className="checklist__task--remove" />
			</li>
		));
		return (
			<div className = "checklilst">
				<ul>{tasks}</ul>
			</div>
		);
	}
}
export default CheckList;