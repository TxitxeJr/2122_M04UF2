import React from 'react';

function MenuItem extends React.Component{

constructor (props){
	super(props);

	this.state ={
		contador: 0
	};
	}

	render (){
	return (
		<li><a href={this.props.url} onClick={
		function (){
		}
		}  >{this.props.text}</a>{this.state.contador}</li>
	);
}
}

export default MenuItem;
