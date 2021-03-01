import React from 'react';
import styled from 'styled-components';

export default function Message({ user }) {
  const message = (user.lastCourse !== 0)  
    ? 'Bem-vindo de volta! Continue seu curso atual abaixo :)' 
    : 'Você não começou nenhum curso ainda. Experimente um! :)';
  
  return (
    <StyledMessage>
      <p> 
        {user.name} 
      </p>
      <p className="bold"> 
        {message} 
      </p>
    </StyledMessage>
  );
}

const StyledMessage = styled.article`
  padding-left: 25px;
  background-color: var(--color-blue);

  position: absolute;
  left: 0;
  top: 100px;

  height: 100px;
  width: 100%;

  color: white;
  font-size: 24px;

  display: flex;
  flex-direction: column;
  justify-content: center;

  .bold {
    font-weight: bold;
  }
`;
