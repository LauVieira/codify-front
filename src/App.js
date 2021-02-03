import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './assets/GlobalStyles'

import * as Pages from './pages';

export default function App() {
  return (
	<Router>
		<GlobalStyle />
		<Switch>
			<Route path='/cadastro' component={Pages.SignUp} />
			<Route path='/entrar' component={Pages.SignIn} />
			<Route path='/esqueci-senha' component={Pages.ForgotPassword} />
			<Route path='/redefinir-senha' component={Pages.RedefinePassword} />
		</Switch>
	</Router>
  );
}
