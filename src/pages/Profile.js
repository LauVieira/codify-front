import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { BsPencil, BsArrowLeftShort } from 'react-icons/bs';

import axios from '../services/api';
import { Header, ProfilePicture, Input, Label, Error, Button } from '../components';
import UserContext from '../contexts/UserContext';

import Patterns from '../utils/PatternsHtml';
import Helpers from '../utils/Helpers';

export default function Profile() {
  const { user } = useContext(UserContext);
  const [name, setName] = useState(user.name || '');
  const [email, setEmail] = useState(user.email || '');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [onHover, setOnHover] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (disabled) return;
    setDisabled(true);

    const nameCapitalized = Helpers.capitalizeAllAndTrim(name);
    if (nameCapitalized.split(' ').length === 1) {
      setError('Digite o nome completo, por favor!');
      setDisabled(false);

      return;
    }

    if (password !== confirmPassword && changePassword) {
      setError('As senhas digitadas não batem.');

      setDisabled(false);
      return;
    }
    
    const bodyObj = { name: nameCapitalized, email };
    const body = changePassword ? { ...bodyObj } : { ...bodyObj, password, confirmPassword };

    axios
      .put(`/users/${user.id}`, body)
      .then(() => {
        alert('sucesso');
        setDisabled(false);
      })
      .catch(({ response }) => {
        console.error(response);
        setDisabled(false);

        setError(response.data.message);
      });
  }

  return (
    <ProfilePageWrapper>
      <Header />
      <UserDetails>
        <WhiteProfilePicture 
          width="65px" 
          height="65px" 
          existPhoto={false} 
        />
        <Name> 
          { user.name } 
        </Name>
        <ProfileForm onSubmit={handleSubmit}>
          <LeftSide>
            <Label htmlFor="name"> Nome completo </Label>
            <Input
              type="text"
              placeholder="nome completo"
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
              placeholder="e-mail"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              pattern={Patterns.email.regex}
              title={Patterns.email.helper}
              required
              id="e-mail"
            />
            {changePassword && (
              <>
                <Label htmlFor="password"> Senha </Label>
                <Input
                  type="password"
                  placeholder="nova senha"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                  pattern={Patterns.password.regex}
                  title={Patterns.password.helper}
                  id="password"
                  width="50%"
                  required
                />
                <Label htmlFor="passwordRef"> Repita a senha </Label>
                <Input
                  type="password"
                  placeholder="repetir senha"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                  title="Preencha o campo"
                  id="passwordRef"
                  required
                  width="50%"
                />
              </>
            )}
          </LeftSide>
          <RightSide>
            <ProfilePicture 
              width="150px" 
              height="150px" 
              existPhoto={false}
              onMouseOver={() => setOnHover(!onHover)}
              onMouseOut={() => setOnHover(!onHover)}
            > 
              <WrapperIcon onHover={onHover}>
                <BsPencil color="#2C8396" fontSize="30px" />
                <p> editar </p>
              </WrapperIcon>
            </ProfilePicture>
          </RightSide>
          <SpaceArea>
            { error && (
              <Error> 
                { error } 
              </Error> 
            )}
          </SpaceArea>
          <WrapperButton>
            <div>
              {!changePassword && (
                <Button
                  type="button"
                  isLoading={false}
                  onClick={() => setChangePassword(!changePassword)}
                  width="180px"
                >
                  Trocar senha
                </Button>
              )}
              <Button
                type="submit"
                disabled={disabled}
                isLoading={disabled}
                width="120px"
              >
                {disabled ? '' : 'Salvar'}
              </Button>
            </div>
            {changePassword && (
              <BsArrowLeftShort 
                fontSize="40px" 
                color="#2C8396" 
                cursor="pointer"
                onClick={() => setChangePassword(!changePassword)}
              />
            )}
          </WrapperButton>
        </ProfileForm>
      </UserDetails>
    </ProfilePageWrapper>
  );
}

const WhiteProfilePicture = styled(ProfilePicture)`
  border: 2px solid white!important;
  color: white!important;
`;

const ProfilePageWrapper = styled.main`
  width: 100%;
  min-height: calc(100vh + 175px);
  height: auto;

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

  padding-top: 15px;
  position: relative;
`;

const Name = styled.h1`
  color: var(--color-white);
  font-weight: bold;
  font-size: 2.5rem;
  line-height: 3.5rem;
  margin-top: 5px;
`;

const LeftSide = styled.section`
  width: 60%;

  input::placeholder {
    font-weight: 300;
  }
`;

const WrapperButton = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  width: 100%;
  padding-right: 10%;

  & > div {
    display: flex;
  }

  button {
    height: 40px;
    margin-right: 20px;

    font-size: 1.8rem;

    span::after {
      font-size: 3rem;
      top: -5px;
    }
  }
`;

const SpaceArea = styled.div`
  width: 100%;

  padding: 15px 0px;
`;

const WrapperIcon = styled.div`
  position: absolute;
  top: 31.5%;
  right: 31.5%;

  display: ${(props) => props.onHover ? 'flex' : 'none'};
  flex-direction: column;
  align-items: center;
  z-index: 2;

  p {
    text-transform: uppercase;
    color: #2C8396;
    font-size: 1.4rem;
  }
`;

const RightSide = styled.section`
  position: relative;
  width: 40%;

  figure {
    margin: 30px auto 0 auto;

    p {
      color: #2C8396;
      font-size: 1.6rem;
      letter-spacing: initial;
    }

    &:hover {
      filter: opacity(30%);
    }
  }
`;

const ProfileForm = styled.form`
  display: flex;
  flex-wrap: wrap;

  margin: 0 auto;
  
  position: absolute;
  width: 65%;
  padding: 2.5%;
  padding-right: 0;

  left: 17.5%;
  top: 75%;

  background: #FFF;
  border-radius: var(--radius-strong);
  box-shadow: var(--shadow-strong);

  input {
    margin-bottom: 25px;
    margin-top: 5px;
  }
`;
