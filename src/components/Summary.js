/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { mockedUser } from '../utils/mockedCourses';
import CourseContext from '../contexts/CourseContext';
import UserContext from '../contexts/UserContext';
import Button from './Button';
import ProfilePicture from './ProfilePicture';

export default function Summary() {
  const { courseData, setCourseData } = useContext(CourseContext);
  const { user, setUser } = useContext(UserContext);
  const [percentage, setPercentage] = useState(99);
  const [usedValue, setUsedValue] = useState(percentage);
  const history = useHistory();
  console.log(user);
  useEffect(() => {
    if (percentage <= 8) {
      setUsedValue(8);
    }
  }, []);

  useEffect(() => {
    setUser(mockedUser);
  }, []);

  function redirect() {
    history.push('/curso/2/capitulo/1/topico/1');
  }

  return (
    <Container>
      <div>
        <ProfilePicture
          onClick={() => alert('Em construção')}
          existPhoto={false}
        />
        <Advance>
          <p className="title">Você não iniciou esse curso ainda</p>
          <div>
            <progress id="progress" value={usedValue} max="100" />
            <P percentage={percentage}>
              {percentage}
              %
            </P>
          </div>
        </Advance>
      </div>
      <Button onClick={redirect}>Iniciar curso</Button>
    </Container>
  );
}

const Container = styled.div`
    display: flex; 
    align-items: center;
    justify-content: space-between;
    width: 80%;
    margin: 0 auto;
    background: #FFF;
    position: absolute;
    left: 10%;
    top: 75%;
    height: 180px;
    border-radius: 15px;
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.15);
    padding: 0 5%;
    & > div {
        display: flex;
        justify-content: left;
        align-items: center;
    }
    button{
        width: 25%;
        font-size: 18px;
        span::after{
            font-size: 30px;
            top: -5px;
        }
    }
    figure{
        width: 60px;
        height: 60px;
        margin-right: 25px;
    }
`;

const P = styled.p`
    left: ${(props) => (props.percentage <= 10 ? '1.5%' : props.percentage > 99 ? `${props.percentage - 11}%` : `${props.percentage - 8}%`)};
`;

const Advance = styled.div`
    font-size: 15px;  
    margin-bottom: 10px;
    .title {
        font-weight: 400;
        color: #000;
        padding-bottom: 10px;
    }
    & > div {
        height: 20px;
        position: relative;
        p{
            position: absolute;
            bottom: 12%;
            font-size: 10px;
            color: white;
            font-weight: bold;
        }
    }
    progress {
        border-radius: 7px; 
        width: 100%;
        height: 15px;
        box-shadow: 1px 1px 4px rgba( 0, 0, 0, 0.2 );
        margin: 4px 0px;
    }
    progress::-webkit-progress-bar {
      background-color: #EAEAEA;
      border-radius: 7px;
    }
    progress::-webkit-progress-value {
      background-color: #76DF93;
      border-radius: 7px;
      color: white;
    }
`;
