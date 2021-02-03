import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';
import Patterns from '../utils/PatternsHtml';
import Helpers from '../utils/Helpers';
import axios from 'axios';

import { Codify, Headline, Input, Button } from '../components';

export default function SignUp() {
  let [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRef, setPasswordRef] = useState('');
  const [disabled, setDisabled] = useState(false);
  const history = useHistory();

  
  return (
    <MainWrapper>
      <Column>
        <Codify 
          color={'white'} 
          fontSize={'9rem'} 
          lineHeight={'12rem'}
        > 
          Codify 
        </Codify>
        <Headline> learn. practice. code. </Headline>

        <Form onSubmit={handleSubmit}>
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
            {disabled ? 'Cadastrar': 'Carregando...'} 
          </Button>

          <StyledLink to='/entrar'> Já tem conta ? Faça login </StyledLink>
          <StyledLink to='/recuperar-senha'> Esqueceu sua senha ? </StyledLink>
        </Form>
      </Column>
    </MainWrapper>
  );
}

const MainWrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  padding-top: 5vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Column = styled.div`
  width: 90%;
  max-width: 400px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  padding: 40px 20px;
  margin-top: 50px;

  background: var(--color-white);
  border-radius: var(--radius-regular);
  box-shadow: var(--shadow-regular);
`;

const StyledLink = styled(Link)`
  font-size: 2rem;
  line-height: 2.5rem;
  text-align: center;
  outline: none;

  margin-top: 20px;

  text-decoration: underline;
  transition: 0.1s;

  &:hover, &:focus {
    color: var(--color-blue);
  }
`;