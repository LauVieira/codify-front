import React, { useState } from 'react';
import styled from 'styled-components';
import { CheckBox } from '../components';
import ArrowBackButton from '../components/ArrowBackButton';
import YoutubePlayer from '../components/YoutubePlayer';

export default function Test() {
  const [isChecked, setIsChecked] = useState(false);
  const link = 'https://www.youtube.com/watch?v=vp3Lf3Ex5ZI';
  return (
    <>
      <HeaderTest>
        <ArrowBackButton
          to="#"
          width="40px"
          height="40px"
          left="15px"
          top="9px"
          fontSize="32px"
        />
      </HeaderTest>
      <A>
        <CheckBox isChecked={isChecked} setIsChecked={setIsChecked} />
      </A>
    </>
  );
}

const HeaderTest = styled.div`
    height: 60px;
    background-color: #292929;
    position: relative;
`;

const A = styled.div`
    padding-top: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;
