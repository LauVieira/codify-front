import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { CookiesProvider, useCookies } from 'react-cookie';

import GlobalStyle from './assets/GlobalStyles';
import { UserProvider } from './contexts/UserContext';
import { CourseProvider } from './contexts/CourseContext';
import * as Pages from './pages';

export default function App() {
  return (
    <CookiesProvider>
      <UserProvider>
        <CourseProvider>
          <Router>
            <GlobalStyle />
            <Switch>
              <ProtectedRoute path="/curso/topico" />
              <ProtectedRoute path="/curso/:id" component={Pages.Course} />
              <UnprotectedRoute path="/cadastrar" component={Pages.SignUp} />
              <UnprotectedRoute path="/entrar" component={Pages.SignIn} />
              <UnprotectedRoute path="/esqueci-senha" component={Pages.ForgotPassword} />
              <UnprotectedRoute path="/redefinir-senha" component={Pages.RedefinePassword} />
              <ProtectedRoute path="/" exact component={Pages.LandingPage} />
            </Switch>
          </Router>
        </CourseProvider>
      </UserProvider>
    </CookiesProvider>
  );
}

function ProtectedRoute(props) {
  const [cookies] = useCookies(['token']);
  const { token } = cookies;

  if (!token) {
    return (
      <Redirect to="/entrar" />
    );
  }
  return (
    <Route {...props} />
  );
}
function UnprotectedRoute(props) {
  const [cookies] = useCookies(['token']);
  const { token } = cookies;
  if (token) {
    return (
      <Redirect to="/" />
    );
  }
  return (
    <Route {...props} />
  );
}
