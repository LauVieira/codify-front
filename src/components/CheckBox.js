/* eslint-disable max-len */
/* eslint-disable radix */
import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';
import { IoCheckmark } from 'react-icons/io5';
import axios from '../services/api';
import CourseContext from '../contexts/CourseContext';

import { error } from '../lib/notify';

export default function CheckBox({
  isChecked, setIsChecked, activity, setActivities , setActivityIndex, activities,
}) {
  const { courseData } = useContext(CourseContext);

  useEffect(() => {
    if (activity.done) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [activity]);

  function handleClick() {
    axios.post(`/courses/${courseData.id}/activities/${activity.id}`)
      .then((response) => {
        setIsChecked(response.data.done);
      })
      .catch((err) => {
        error('Erro ao postar atividade feita');
        console.log(err);
      });
  }
  return (
    <Label 
      htmlFor="concluded" 
      onChange={() => handleClick()} 
      isChecked={isChecked}
    >
      <Check
        id="concluded"
        type="checkbox"
        value={isChecked}
      />
      <Square isChecked={isChecked}>
        <IconCheck isChecked={isChecked} />
      </Square>
      <p> Marcar como concluído </p>
    </Label>
  );
}

const Label = styled.label`
    display: flex;
    align-items: center;
    transition: all 0.15s linear;

    font-weight: bold;
    color: ${(props) => props.isChecked ? '#76DF93' : '#9D9D9D'};
    font-size: 1.9rem;
    line-height: 2.2rem;

    cursor: pointer;
`;

const Square = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 23px;
    height: 23px;
    cursor: pointer;

    transition: all 0.2s linear;
    border: 2px solid ${(props) => props.isChecked ? '#76DF93' : '#9D9D9D'};
    margin-right: 10px;
`;

const Check = styled.input`
    display: none;
`;

const IconCheck = styled(IoCheckmark)`
  transition: all 0.2s linear;
  color: #76DF93;
  opacity: ${(props) => props.isChecked ? 1 : 0};
  z-index: 1;
`;
