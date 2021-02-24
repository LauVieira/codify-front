import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import axios from '../services/api';

import Patterns from '../utils/PatternsHtml';
import UserContext from '../contexts/UserContext';

import {
  Logo,
  Headline,
  Input,
  Button,
  LayoutInitialPage,
  Anchor,
  Form,
  Error,
} from '../components';

export default function SignIn() {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState('');

  const history = useHistory();

  async function handleSubmit(event) {
    try {
      event.preventDefault();

      if (disabled) return;
      setDisabled(true);
  
      const body = { email, password };
      const { data } = await axios.post('/users/sign-in', body);

      setUser({ ...data });
      history.push('/');
    } catch (err) {
      console.error(err);
      setDisabled(false);

      setError(err.response.data.message);
    }
  }

  return (
    <LayoutInitialPage>
      <Logo
        color="white"
        fontSize="9rem"
        lineHeight="12rem"
      />
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
        <SpaceArea>
          { error && (
            <Error> 
              { error } 
            </Error> 
          )}
        </SpaceArea>
        <Button
          type="submit"
          disabled={disabled}
          isLoading={disabled}
        >
          {disabled ? '' : 'entrar'}
        </Button>

        <Anchor to="/cadastrar"> primeira vez ? crie uma conta ! </Anchor>
        <Anchor to="#" onClick={() => alert('Em construção')}> esqueceu sua senha ? </Anchor>
      </Form>
    </LayoutInitialPage>
  );
}

const SpaceArea = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 4px 0px;
`;
