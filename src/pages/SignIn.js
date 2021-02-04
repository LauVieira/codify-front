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
  Anchor,
  Form
} from '../components';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);

  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    if(disabled) return;

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
          type='email'
          placeholder='e-mail'
          value={email}
          onChange={event => setEmail(event.target.value)}
          pattern={Patterns.email.regex}
          title={Patterns.email.helper}
          required
          autoFocus
          autocomplete='on'
        />
        <Input
          type='password'
          placeholder='senha'
          value={password}
          onChange={event => setPassword(event.target.value)}
          pattern={Patterns.password.regex}
          title={Patterns.password.helper}
          required
        />
        <Button 
          type='submit' 
          disabled={disabled}
          isLoading={disabled}
        > 
          {disabled ? '': 'entrar'} 
        </Button>

        <Anchor to='/cadastrar'> primeira vez ? crie uma conta ! </Anchor>
        <Anchor to='/esqueci-senha'> esqueceu sua senha ? </Anchor>
      </Form>
    </LayoutLandingPage>
  );
}