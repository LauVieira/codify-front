/* eslint-disable no-nested-ternary */
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Button from './Button';
import ProfilePicture from './ProfilePicture';
import axios from '../services/api';
import { error } from '../lib/notify';

export default function Summary({ courseData, program, isInitialized }) {
  const history = useHistory();

  const [disabled, setDisabled] = useState(false);
  const [percentage] = useState(courseData.progress);
  const [usedValue, setUsedValue] = useState(percentage);
  
  useEffect(() => {
    if (percentage <= 8) {
      setUsedValue(8);
    }
  }, []);

  function redirectFirstActivity() {
    history.push(`/curso/${courseData.id}/capitulo/${program[0].id}/topico/${program[0].topics[0].id}/atividade/${program[0].topics[0].activities[0].id}`);
  }

  async function redirect() {
    try {
      if (!isInitialized) {
        redirectFirstActivity();
        return;
      }

      if (disabled) return;
      setDisabled(true);

      const { data } = await axios.post(`/users/return-course/${courseData.id}`);
      if (data.firstActivity) {
        redirectFirstActivity();
      }

      history.push(`/curso/${courseData.id}/capitulo/${data.chapterId}/topico/${data.topicId}/atividade/${data.activityId}`);
    } catch (err) {
      setDisabled(false);
      error(err.response.data.message);
      console.error(err);
    }
  }

  return (
    <StyledSummary>
      <Wrapper>
        <ProfilePicture
          onClick={() => history.push('/profile')}
        />

        <Container>
          <Title> 
            {isInitialized ? `Faltam só ${100 - percentage}% para concluir o curso!` : 'Você não iniciou esse curso ainda' }
          </Title>
          <div>
            <Progress id="progress" value={usedValue} max="100" />
            <Percentage percentage={percentage}>
              <span> 
                {percentage}
                % 
              </span>
            </Percentage>
          </div>
        </Container>
      </Wrapper>

      <Button
        type="button"
        isLoading={disabled} 
        disabled={disabled}
        onClick={redirect}
      > 
        {isInitialized ? 'Continuar curso' : 'Iniciar Curso'} 
      </Button>
    </StyledSummary>
  );
}

const StyledSummary = styled.section`
  display: flex; 
  align-items: center;
  justify-content: space-between;

  width: 80%;
  height: 180px;

  margin: 0 auto;
  padding: 0 5%;
  
  position: absolute;
  left: 10%;
  top: 75%;
  
  background: #FFF;
  border-radius: 15px;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
  
  button {
    width: 25%;
    font-size: 18px;

    span::after {
      font-size: 30px;
      top: -5px;
    }
  }

  figure {
    width: 60px;
    height: 60px;
    margin-right: 25px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
`;

const Container = styled.div`
  font-size: 15px;  
  margin-bottom: 10px;

  & > div {
    height: 20px;
    position: relative;
  }
`;

const Title = styled.h2`
  font-weight: 400;
  color: #000;
  padding-bottom: 10px;
`;

const Progress = styled.progress`
  width: 100%;
  height: 20px;
  
  box-shadow: 1px 1px 4px rgba( 0, 0, 0, 0.2 );
  border-radius: 7px; 
  margin: 4px 0px;

  &::-webkit-progress-bar {
    background-color: #EAEAEA;
    border-radius: 7px;
  }

  &::-webkit-progress-value {
    background-color: #76DF93;
    border-radius: 7px;
    color: white;
  }
`;

const Percentage = styled.p`
  position: absolute;
  left: ${(props) => (props.percentage <= 10 ? '1.5%' : props.percentage > 99 ? `${props.percentage - 11}%` : `${props.percentage - 15}%`)};
  bottom: -5px;


  span {
    font-size: 16px;
    color: white;
    font-weight: bold;
  }
`;
