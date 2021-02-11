import React, { useState } from 'react';

import Patterns from '../utils/PatternsHtml';

import {
  Logo,
  Headline,
  Input,
  Button,
  LayoutInitialPage,
  Anchor,
  Form,
} from '../components';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [disabled, setDisabled] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (disabled) return;
    setDisabled(true);

    alert('Em construção');
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
