import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { Codify, Headline, Input } from '../components';

export default function SignUp() {
  
  return (
    <MainWrapper>
      <Codify 
        color={'white'} 
        fontSize={'11.6rem'} 
        lineHeight={'13.9rem'}
      > 
        Codify 
      </Codify>
      <Headline> learn. practice. code. </Headline>
      <Form>
      </Form>
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

const Form = styled.form`
  width: 95%;
  max-width: 400px;

  display: flex;
  flex-direction: column;

  padding: 40px 20px;
  margin-top: 40px;

  background: var(--color-white);
  border-radius: var(--radius-regular);
  box-shadow: var(--shadow-regular);
`;