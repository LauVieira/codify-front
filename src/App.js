/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './assets/GlobalStyles';
import { UserProvider } from './contexts/UserContext';
import * as Pages from './pages';

export default function App() {
  return (
    <UserProvider>
	  <Router>
	  	  <GlobalStyle />
		  <Switch>
			<Route path='/curso/topico' />
			<Route path='/curso/:id' component={Pages.Course} />
			<Route path="/cursos" component={Pages.Courses} />
			<Route path='/cadastrar' component={Pages.SignUp} />
			<Route path='/entrar' component={Pages.SignIn} />
			<Route path='/esqueci-senha' component={Pages.ForgotPassword} />
			<Route path='/redefinir-senha' component={Pages.RedefinePassword} />
			<Route path="/perfil" component={Pages.Profile} />
            <Route path="/pagina-inicial" component={Pages.LandingPage} />
			<Route path='/' exact component={Pages.Home} />
		  </Switch>
	  </Router>
    </UserProvider>
  );
}
