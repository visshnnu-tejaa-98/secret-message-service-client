import logo from './logo.svg';
import Home from './components/Home';
import Target from './components/Target';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div>
				<Switch>
					<Route path='/' exact>
						<Home />
					</Route>
					<Route path='/target' exact>
						<Target />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
