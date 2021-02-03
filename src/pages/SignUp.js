import React, { useState, useEffect } from 'react';
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
  Form
} from '../components';

export default function SignUp() {
  let [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRef, setPasswordRef] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');
  const [disabled, setDisabled] = useState(false);

  const history = useHistory();

  return (
    <LayoutLandingPage>
      <Codify 
        color={'white'} 
        fontSize={'9rem'} 
        lineHeight={'12rem'}
      > 
        Codify 
      </Codify>
      <Headline> learn. practice. code. </Headline>

      <Form onSubmit={undefined}>
        <Input
          type='text'
          placeholder='Nome completo'
          value={name}
          onChange={event => setName(event.target.value)}
          autoFocus
          pattern={Patterns.name.regex}
          autocomplete='on'
          title={Patterns.name.helper}
          required
        />
        <Input
          type='email'
          placeholder='E-mail'
          value={email}
          onChange={event => setEmail(event.target.value)}
          pattern={Patterns.email.regex}
          title={Patterns.email.helper}
          required
          autocomplete='on'
        />
        <Input
          type='password'
          placeholder='Senha'
          value={password}
          onChange={event => setPassword(event.target.value)}
          pattern={Patterns.password.regex}
          title={Patterns.password.helper}
          required
        />
        <Input
          type='password'
          placeholder='Repetir senha'
          value={passwordRef}
          onChange={event => setPasswordRef(event.target.value)}
          required
        />
        <Button 
          type='submit' 
          disabled={disabled}
        > 
          {disabled ? 'Carregando...': 'Cadastrar'} 
        </Button>

        <Anchor to='/entrar'> Já tem conta ? Faça login </Anchor>
        <Anchor to='/recuperar-senha'> Esqueceu sua senha ? </Anchor>
      </Form>
    </LayoutLandingPage>
  );
}