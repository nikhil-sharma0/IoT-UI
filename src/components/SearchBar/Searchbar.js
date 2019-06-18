import React, { Component } from 'react';
import ReactSearchBox from 'react-search-box';
import Checkbox from '../checkbox/Checkbox'

const searchBar = {
	marginTop: '20px',
	width: '450px',
	marginLeft: '450px'
}
const headerStyle = {
	textAlign: "center"
}
const checkboxStyle = {
	marginLeft: '420px',
	paddingTop: '15px'
}

export default class App extends Component {
	state = { checked: false }
	data = [
		{
			key: 'john',
			value: 'John Doe',
		},
		{
			key: 'jane',
			value: 'Jane Doe',
		},
		{
			key: 'mary',
			value: 'Mary Phillips',
		},
		{
			key: 'robert',
			value: 'Robert',
		},
		{
			key: 'karius',
			value: 'Karius',
		},
	];
	emotionCheckboxChange = event => {
    	this.setState({ emotionChecked: event.target.checked });
	}
	locationCheckboxChange = event => {
    	this.setState({ locationChecked: event.target.checked });
	}
	knownCheckboxChange = event => {
    	this.setState({ knownChecked: event.target.checked });
	}
	unknownCheckboxChange = event => {
    	this.setState({ unknownChecked: event.target.checked });
	}	  

	render() {
		return (
			<div>
				<h1 style={headerStyle}>Employee Details</h1>
				<div style={searchBar}>
					<ReactSearchBox
						placeholder="Enter name"
						value="Doe"
						data={this.data}
						callback={record => console.log(record)}
					/>
				</div>
				<div style={checkboxStyle}>
					<label style={{ marginRight: 20 }}>
						<Checkbox checked={this.state.emotionChecked} onChange={this.emotionCheckboxChange} />
						<span style={{ marginLeft: 8 }}>By emotion</span>
					</label>
					<label style={{ marginRight: 20 }}>
						<Checkbox checked={this.state.locationChecked} onChange={this.locationCheckboxChange} />
						<span style={{ marginLeft: 8 }}>By location</span>
					</label>
					<label style={{ marginRight: 20 }}>
						<Checkbox checked={this.state.knownChecked} onChange={this.knownCheckboxChange} />
						<span style={{ marginLeft: 8 }}>Known face</span>
					</label>
					<label style={{ marginRight: 20 }}>
						<Checkbox checked={this.state.unknownChecked} onChange={this.unknownCheckboxChange} />
						<span style={{ marginLeft: 8 }}>Unknown face</span>
					</label>
				</div>
				{/* <SearchField>placeholder='Search item' onChange={'onChange'}</SearchField> */}
			</div>
		);
	}
}
