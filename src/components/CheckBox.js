/* eslint-disable max-len */
/* eslint-disable radix */
import React, { useEffect } from 'react';
import styled from 'styled-components';
import { IoCheckmark } from 'react-icons/io5';
import axios from '../services/api';

export default function CheckBox({
  isChecked, setIsChecked, activity, setActivities , setActivityIndex, activities,
}) {
  useEffect(() => {
    if (activity.done) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [activity]);

  function handleClick() {
    axios.post(`/courses/activities/${activity.id}`)
      .then((response) => {
        const newActivities = activities;
        const index = newActivities.findIndex((n) => n.id === parseInt(response.data.activityId));
        newActivities[index].activityUsers[0].done = response.data.done;
        setActivities(newActivities);
        setIsChecked(response.data.done);
      })
      .catch((error) => {
        alert('Erro ao postar atividade feita');
        console.log(error);
      });
  }
  return (
    <Label htmlFor="concluded" isChecked={isChecked}>
      <Check
        id="concluded"
        type="checkbox"
        value={isChecked}
        onChange={() => handleClick()}
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
