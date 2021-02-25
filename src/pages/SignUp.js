import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import axios from '../services/api';
import { success } from '../lib/notify';
import Patterns from '../utils/PatternsHtml';
import Helpers from '../utils/Helpers';

import {
  Logo,
  Input,
  Button,
  Error,
} from '../components';

import {
  Anchor, Form, Headline, LayoutInitialPage, 
} from '../components/InitialPage';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState('');

  const history = useHistory();

  async function handleSubmit(event) {
    try {
      event.preventDefault();

      if (disabled) return;
      setDisabled(true);

      const nameCapitalized = Helpers.capitalizeAllAndTrim(name);
      if (nameCapitalized.split(' ').length === 1) {
        setError('Digite o nome completo');
        setDisabled(false);
  
        return;
      }

      if (password !== confirmPassword) {
        setError('As senhas digitadas não batem');
        setDisabled(false);
  
        return;
      }

      const body = {
        name: nameCapitalized, email, password, confirmPassword,
      };
      await axios.post('/users/sign-up', body);

      success(['Cadastro concluído com sucesso!', 'Faça login para continuar']);
      history.push('/entrar');
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
          type="text"
          placeholder="nome completo"
          value={name}
          onChange={(event) => setName(event.target.value)}
          autoFocus
          pattern={Patterns.name.regex}
          autocomplete="on"
          title={Patterns.name.helper}
          required
        />
        <Input
          type="email"
          placeholder="e-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          pattern={Patterns.email.regex}
          title={Patterns.email.helper}
          required
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
          {disabled ? '' : 'cadastrar'}
        </Button>

        <Anchor to="/entrar"> já tem conta ? Faça login </Anchor>
        <Anchor to="/esqueci-senha"> esqueceu sua senha ? </Anchor>
      </Form>
    </LayoutInitialPage>
  );
}
