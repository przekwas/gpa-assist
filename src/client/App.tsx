import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Registration from './views/Registration';

// ADD TO CLIENT_ROUTES IN SERVER FOR EACH ROUTE PATH!!
const App = (props: AppProps) => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					{() => <h1 className="text-center display-1 mt-5">Home</h1>}
				</Route>
				<Route exact path="/registration">
					<Registration />
				</Route>
				<Route exact path="/about">
					{() => <h1 className="text-center display-1 mt-5">About</h1>}
				</Route>
				<Route exact path="/contact">
					{() => <h1 className="text-center display-1 mt-5">Contact</h1>}
				</Route>
				<Route exact path="/oops">
					{() => (
						<h1 className="text-center display-1 mt-5">
							Oops Something Went Wrong! :(
						</h1>
					)}
				</Route>
			</Switch>
		</BrowserRouter>
	);
};

interface AppProps {}

export default App;
