import React from 'react';

class GroceryList extends React.Component {
	render(){
		return (
			<ul>
				<ListItem quantity="1" name="Bread" />
				<ListItem quantity="2" name="Eggs" />
				<ListItem quantity="3" name="Milk" />
			</ul>
		)
	}
}

class ListItem extends React.Component{
	render(){
		return (
			<li>
				{this.props.quantity} * {this.props.name}
			</li>
		)
	}
}
React.render(<GroceryList />, document.getElementById('root'));