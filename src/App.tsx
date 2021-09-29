import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav';
import Login from './components/Login';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<Nav />
						<Login />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
