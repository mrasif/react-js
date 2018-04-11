import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Item(props){
	return (
		<div className="cards">
			<h1>{props.name}</h1>
			<span>{props.description}</span>
		</div>
	);
}

function Items(){
	return (
		<div>
			<Item name="First" description="description 1" />
			<Item name="Second" description="description 2" />
			<Item name="Third" description="description 3" />
			<Item name="Fourth" description="description 4" />

		</div>
    );
}

ReactDOM.render(
				<Items />,
				document.getElementById('root')
			   );
