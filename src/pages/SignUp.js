import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { Codify, Headline } from '../components';

export default function SignUp() {
  
  return (
    <MainWrapper>
      <Codify color={'white'} fontSize={'11.6rem'} lineHeight={'13.9rem'}> Codify </Codify>
      <Headline> learn. practice. code. </Headline>
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