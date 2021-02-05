import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Patterns from '../utils/PatternsHtml';
import Helpers from '../utils/Helpers';

import {
  Codify,
  Headline,
  Input,
  Button,
  LayoutLandingPage,
  Anchor,
  Form,
} from '../components';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [disabled, setDisabled] = useState(false);

  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();

    if (disabled) return;
    setDisabled(true);

    if (password !== confirmPassword) {
      alert('Os campos "senha" e "confirmar senha" devem ser idênticos');
      setDisabled(false);

      return;
    }

    const nameCapitalized = Helpers.capitalizeAllAndTrim(name);
    const body = {
      name: nameCapitalized, email, password, confirmPassword,
    };

    axios
      .post(`${process.env.API_BASE_URL}/users/sign-up`, body)
      .then(() => {
        if (confirm('Cadastro feito com sucesso! Redirecionando para tela de login ...')) {
          history.push('/entrar');
        } else {
          setDisabled(false);
        }
      })
      .catch(({ response }) => {
        console.error(response);
        setDisabled(false);

        alert(response.data.error);
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
        <Button
          type="submit"
          disabled={disabled}
          isLoading={disabled}
        >
          {disabled ? '' : 'cadastrar'}
        </Button>

        <Anchor to="/entrar"> já tem conta ? Faça login </Anchor>
        <Anchor onClick={() => alert('Em construção')}> esqueceu sua senha ? </Anchor>
      </Form>
    </LayoutLandingPage>
  );
}
