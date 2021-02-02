import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './assets/GlobalStyles'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default function App() {
  return (
	<Router>
		<GlobalStyle />
		<Switch>
			<Route path='/cadastro' component={SignUp} />
			<Route path='/entrar' component={SignIn} />
		</Switch>
	</Router>
  );
}
