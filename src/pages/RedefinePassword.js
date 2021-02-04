import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

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
  const [passwordConfirm, setConfirmPassword] = useState('');
  const [disabled, setDisabled] = useState(false);

  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();

    if(disabled) return;
    setDisabled(true);

    if(password !== passwordConfirm) {
      alert(`Os campos "nova senha" e "repetir senha" devem ser idênticos`);

      setDisabled(false);
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
          title='Preencha o campo'
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