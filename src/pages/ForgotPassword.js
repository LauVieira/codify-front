import React, { useState } from 'react';

import Patterns from '../utils/PatternsHtml';
import axios from '../services/api';
import { success } from '../lib/notify';

import {
  Logo,
  Input,
  Button,
  Error,
} from '../components';

import {
  Anchor, Form, Headline, LayoutInitialPage, 
} from '../components/InitialPage';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(event) {
    try {
      event.preventDefault();

      if (disabled) return;
      setDisabled(true);

      await axios.post('users/forgot-password', { email });

      success(['Se este email estiver associado', 'Você receberá um e-mail de redefinição']);
      setDisabled(false);
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
        <Error align="center"> 
          { error || ''} 
        </Error>
        <Button
          type="submit"
          disabled={disabled}
          isLoading={disabled}
        >
          {disabled ? '' : 'recuperar senha'}
        </Button>

        <Anchor to="/entrar"> voltar para login </Anchor>
      </Form>
    </LayoutInitialPage>
  );
}
