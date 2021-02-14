/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useHistory, Link } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';
import axios from '../services/api';
import Button from './Button';
import YoutubePlayer from './YoutubePlayer';
import CheckBox from './CheckBox';

export default function StudyAreaContent({ activity }) {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <Container>
      {activity
        ? (
          <Box>
            {activity.type === 'theory'
              ? (activity.theory
                ? <YoutubePlayer link={activity.theory.youtubeLink} />
                : <YoutubePlayer link="https://www.youtube.com/watch?v=BN_8bCfVp88" />)
              : <Word>{activity.id}</Word>}
            <ContainerBox>
              <CheckBox
                isChecked={isChecked}
                setIsChecked={setIsChecked}
                activity={activity.id}
              />
              <Button>Avançar</Button>
            </ContainerBox>
          </Box>
        )
        : <Word>Nao tem atividade</Word>}
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
const Word = styled.h1`
  color: red;
`;
