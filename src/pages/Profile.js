import React, { useContext, useState } from 'react';
import styled from 'styled-components';

import axios from '../services/api';
import { Header, ProfilePicture, Input, Label, Error, Button } from '../components';
import UserContext from '../contexts/UserContext';

import Patterns from '../utils/PatternsHtml';
import Helpers from '../utils/Helpers';

export default function Profile() {
  const { user } = useContext(UserContext);
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');
  const [error, setError] = useState('');
  const [disabled, setDisabled] = useState(false);

  return (
    <ProfilePageWrapper>
      <Header />
      <UserDetails>
        <ProfilePicture 
          width="80px" 
          height="80px" 
          existPhoto={false} 
        />
        <Name> 
          { user.name } 
        </Name>
        <ProfileForm>
          <LeftSide>
            <Label htmlFor="name"> Nome completo </Label>
            <Input
              type="text"
              placeholder="Digite seu nome completo"
              value={name}
              onChange={(event) => setName(event.target.value)}
              autoFocus
              pattern={Patterns.name.regex}
              id="name"
              title={Patterns.name.helper}
              required
            />
            <Label htmlFor="e-mail"> E-mail </Label>
            <Input
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              pattern={Patterns.email.regex}
              title={Patterns.email.helper}
              required
              id="e-mail"
            />
          </LeftSide>
          <RightSide>
            <ProfilePicture 
              width="150px" 
              height="150px" 
              existPhoto={false} 
            />
          </RightSide>
          { error && <Error> { error } </Error> }
          <Container>
            <Button
              type="button"
              isLoading={false}
            >
              Trocar senha
            </Button>
            <Button
              type="submit"
              disabled={disabled}
              isLoading={disabled}
            >
              {disabled ? '' : 'Salvar'}
            </Button>
          </Container>
        </ProfileForm>
      </UserDetails>

    </ProfilePageWrapper>
  );
}

const ProfilePageWrapper = styled.main`
  width: 100vw;
  height: 100vh;

  background-color: var(--background-color);
  padding-top: 100px;
`;

const UserDetails = styled.section`
  height: 200px;
  width: 100%;

  background: var(--color-darkblue);

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 35px;
  position: relative;
`;

const Name = styled.h1`
  color: var(--color-white);
  font-weight: bold;
  font-size: 4rem;
  line-height: 5rem;
`;

const LeftSide = styled.div`
  width: 70%;

  input::placeholder {
    font-weight: 300;
  }
`;

const Container = styled.div`
  display: flex;

  &:first-child {
    margin-right: 10px;
  }
`;

const RightSide = styled.div`
  width: 30%;

  figure {
    margin: 0 auto;
  }
`;

const ProfileForm = styled.form`
  display: flex; 

  position: absolute;
  width: 70%;
  padding: 5%;
  left: 10%;
  top: 75%;

  background: #FFF;
  border-radius: var(--radius-strong);
  box-shadow: var(--shadow-strong);
`;
