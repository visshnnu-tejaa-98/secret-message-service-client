import logo from './logo.svg';
import Home from './components/Home';
import Target from './components/Target';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route
					exact
					path='/'
					render={(props) => {
						return <Home />;
					}}
				></Route>
				<Route
					path='/target'
					render={(props) => {
						return <Target />;
					}}
				></Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
