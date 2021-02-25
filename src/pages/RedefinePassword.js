import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import Patterns from '../utils/PatternsHtml';
import axios from '../services/api';
import { success } from '../lib/notify';

import {
  Logo,
  Input,
  Button,
  Error
} from '../components';

import { Form, Headline, LayoutInitialPage } from '../components/InitialPage';

export default function ForgotPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState(false);
  const history = useHistory();
  const { token } = useParams();

  async function handleSubmit(event) {
    try {
      event.preventDefault();

      if (disabled) return;
      setDisabled(true);
  
      if (password !== confirmPassword) {
        setError('As senhas digitadas não batem!');
  
        setDisabled(false);
        return;
      }

      await axios.post('users/redefine-password', { token });

      success(['Senha redefinida com sucesso', 'Faça login para continuar']);
      history.push('/entrar');
    } catch (err) {
      console.error(err);

      setError(err.response.data.message);
      setDisabled(false);
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
          type="password"
          placeholder="nova senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          pattern={Patterns.password.regex}
          title={Patterns.password.helper}
          autoFocus
          required
        />
        <Input
          type="password"
          placeholder="repetir senha"
          value={confirmPassword}
          onChange={(event) => setConfirmPassword(event.target.value)}
          title="Preencha o campo"
          required
        />
        <Error align="center"> 
          { error || ''} 
        </Error>
        <Button
          type="submit"
          disabled={disabled}
          isLoading={disabled}
        >
          {disabled ? '' : 'entrar'}
        </Button>
      </Form>
    </LayoutInitialPage>
  );
}
