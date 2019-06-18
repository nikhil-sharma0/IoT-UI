import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar/Searchbar';
import Card from './components/card/Card'

function App() {
  return (
		<div className="App">
			<SearchBar />
			<Card />
			<Card />
			<Card />
		</div>
  );
}

export default App;
