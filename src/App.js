/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalStyle from './assets/GlobalStyles';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import LandingPage from './pages/LandingPage';
import Courses from './pages/Courses';
import Profile from './pages/Profile';

export default function App() {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/cadastro" component={SignUp} />
        <Route path="/entrar" component={SignIn} />
        <Route path="/cursos" component={Courses} />
        <Route path="/perfil" component={Profile} />
        <Route path="/" component={LandingPage} exact />
      </Switch>
    </Router>
  );
}
