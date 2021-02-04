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


export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [disabled, setDisabled] = useState(false);

  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();

    setDisabled(true);
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
        <Button 
          type='submit' 
          disabled={disabled}
          isLoading={disabled}
        > 
          {disabled ? '': 'recuperar senha'} 
        </Button>

        <Anchor to='/entrar'> voltar para login </Anchor>
      </Form>
    </LayoutLandingPage>
  );
}