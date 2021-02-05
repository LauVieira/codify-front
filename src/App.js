import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './assets/GlobalStyles'
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Course from './pages/Course_';

export default function App() {
  return (
	<Router>
		<GlobalStyle />
		<Switch>
			<Route path='/curso/:id' component={Course} />
			<Route path='/cadastro' component={SignUp} />
			<Route path='/entrar' component={SignIn} />
		</Switch>
	</Router>
  );
}
