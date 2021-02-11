import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import axios from '../services/api';
import Button from './Button';
import YoutubePlayer from './YoutubePlayer';
import CheckBox from './CheckBox';

export default function Header() {
  return (
    <Container>
      <Box>
        <YoutubePlayer link="https://www.youtube.com/watch?v=BN_8bCfVp88" />
        <ContainerBox>
          <CheckBox />
          <Button>Avançar</Button>
        </ContainerBox>
      </Box>
    </Container>
  );
}

const Container = styled.section`
  background-color: #3D3D3D;
  box-shadow: var(--shadow-black);

  height: 82.1vh;
  width: 100%;
  padding: 0 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1;
  position: relative;
`;
const Box = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
  button{
        width: 25%;
        font-size: 18px;
        color:white-space;
        span::after{
            font-size: 30px;
            top: -5px;
        }
    }
`;
const ContainerBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 10px;
`;
