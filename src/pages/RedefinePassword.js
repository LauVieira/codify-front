import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import Patterns from '../utils/PatternsHtml';

import { 
  Codify, 
  Headline, 
  Input, 
  Button,
  LayoutLandingPage,
  Form
} from '../components';

export default function ForgotPassword() {
  const [password, setPassword] = useState('');
  const [passwordRef, setPasswordRef] = useState('');
  const [disabled, setDisabled] = useState(false);

  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    if(disabled) return;

    if(password !== passwordRef) {
      alert(`Os campos "nova senha" e "repetir senha" devem ser idênticos`);

      return;
    }

    alert('Em construção')
  }

  return (
    <LayoutLandingPage>
      <Codify 
        color={'white'} 
        fontSize={'9rem'} 
        lineHeight={'12rem'}
      > 
        codify 
      </Codify>
      <Headline> learn. practice. code. </Headline>

      <Form onSubmit={handleSubmit}>
        <Input
          type='password'
          placeholder='nova senha'
          value={password}
          onChange={event => setPassword(event.target.value)}
          pattern={Patterns.password.regex}
          title={Patterns.password.helper}
          autoFocus
          required
        />
        <Input
          type='password'
          placeholder='repetir senha'
          value={passwordRef}
          onChange={event => setPasswordRef(event.target.value)}
          required
        />
        <Button 
          type='submit' 
          disabled={disabled}
          isLoading={disabled}
        > 
          {disabled ? '': 'entrar'} 
        </Button>
      </Form>
    </LayoutLandingPage>
  );
}