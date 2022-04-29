import React from 'react';
import './App.css';

class Footer extends React.Component {
	render() {
		return (
			<footer className="footer">
				<a href="https://github.com/bvrbryn445/cv-builder">
					{`B.B. Antipolo ${new Date().getFullYear()}`}
				</a>
			</footer>
		)
	}
}

class App extends React.Component {
	constructor() {
		super();

		this.state = {

		};
	}
	render() {
		return (
			<div className="App">
				<Footer />
			</div>)
	}
}

export default App;