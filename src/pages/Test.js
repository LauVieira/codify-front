import React from 'react';
import styled from 'styled-components';
import ArrowBackButton from '../components/ArrowBackButton';
import YoutubePlayer from '../components/YoutubePlayer';

export default function Test() {
  const link = 'https://www.youtube.com/watch?v=vp3Lf3Ex5ZI';
  return (
    <>
      <HeaderTest>
        <ArrowBackButton
          to='#'
          width="40px"
          height="40px"
          left="15px"
          top="9px"
          fontSize="30px"
        />
      </HeaderTest>
      <A>
        <YoutubePlayer link={link} />
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`;
