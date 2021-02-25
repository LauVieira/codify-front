import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import CheckBox from '../CheckBox';
import Button from '../Button';
import CourseContext from '../../contexts/CourseContext';

export default function StudyAreaExercice({ activity }) {
  const {
    activities, setActivityIndex, isChecked, setIsChecked, setActivities,
  } = useContext(CourseContext);
  console.log(activity);
  console.log(activity.exercise);
  console.log(activity);
  return (
    <Box>
      <BoxOne>
        <Title>{activity.exercise.title}</Title>
        <Enun>
          {activity.exercise.statement}
        </Enun>
        <Example>
          {activity.exercise.example}
        </Example>
        <ContainerBox>
          <CheckBox
            isChecked={isChecked}
            setIsChecked={setIsChecked}
            activity={activity}
            setActivityIndex={setActivityIndex}
            setActivities={setActivities}
            activities={activities}
          />
          <Button onClick={() => console.log('activity')}>Avançar</Button>
        </ContainerBox>
      </BoxOne>
      <BoxTwo />
    </Box>
  );
}

const BoxOne = styled.div`
  width: 50%;
  height: 100%;
  position: relative;
`;
const BoxTwo = styled.div`
  width: 50%;
  height: 100%;
`;
const Box = styled.div`
  display: flex;
  width: 100%;
  height: 80vh;
`;
const ContainerBox = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 10px;
  width: 100%;
  position: absolute;
  bottom: 0px;
  right: 0px;
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
const Title = styled.h1`
    font-size: 33px;
    font-weight: bold;
    color: #ffffff;
    margin: 20px 0 0 20px;
`;
const Enun = styled.p`
    font-size: 17px;
    color: #ffffff;
    margin: 20px 10px 0 20px;
`;
const Example = styled.p`
    font-size: 17px;
    color: #ffffff;
    margin: 20px 10px 0 20px;
`;

