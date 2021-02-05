import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Patterns from '../utils/PatternsHtml';
import UserContext from '../contexts/UserContext';

import {
  Codify,
  Headline,
  Input,
  Button,
  LayoutLandingPage,
  Anchor,
  Form,
} from '../components';

export default function SignIn() {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);

  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();

    if (disabled) return;
    setDisabled(true);

    const body = { email, password };
    axios
      .post(`${process.env.API_BASE_URL}/users/sign-in`, body)
      .then(({ data }) => {
        setUser({ ...data });

        if (confirm('Login feito com sucesso! Redirecionando para a página inicial ...')) {
          history.push('/');
        } else {
          setDisabled(false);
        }
      })
      .catch(({ response }) => {
        console.error(response);
        setDisabled(false);

        alert(response.data);
      });
  }

  return (
    <LayoutLandingPage>
      <Codify
        color="white"
        fontSize="9rem"
        lineHeight="12rem"
      >
        codify
      </Codify>
      <Headline> learn. practice. code. </Headline>

      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          placeholder="e-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          pattern={Patterns.email.regex}
          title={Patterns.email.helper}
          required
          autoFocus
          autocomplete="on"
        />
        <Input
          type="password"
          placeholder="senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          pattern={Patterns.password.regex}
          title={Patterns.password.helper}
          required
        />
        <Button
          type="submit"
          disabled={disabled}
          isLoading={disabled}
        >
          {disabled ? '' : 'entrar'}
        </Button>

        <Anchor to="/cadastrar"> primeira vez ? crie uma conta ! </Anchor>
        <Anchor onClick={() => alert('Em construção')}> esqueceu sua senha ? </Anchor>
      </Form>
    </LayoutLandingPage>
  );
}
