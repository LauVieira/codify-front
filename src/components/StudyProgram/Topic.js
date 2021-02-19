/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { RiCheckboxBlankCircleFill, RiCheckboxCircleFill } from 'react-icons/ri';

export default function Topic(props) {
  const [checked, setChecked] = useState(false);
  const { topic, courseId } = props;
  const link = `/curso/${courseId}/capitulo/${topic.chapterId}/topico/${topic.id}`;
  const history = useHistory();

  function stopPropagation(event) {
    event.stopPropagation();
  }
  function handleClick() {
    history.push(`/curso/${courseId}/capitulo/${topic.chapterId}/topico/${topic.id}/atividade/${topic.activities[0].id}`);
  }

  return (
    <Li checked={checked} onClick={stopPropagation}>

      <p>
        {checked ? <RiCheckboxCircleFill /> : <RiCheckboxBlankCircleFill />}
        {topic.title}
      </p>

      <button onClick={handleClick}>Visualizar</button>

    </Li>
  );
}

const Li = styled.li`
  color: #656565;
  display: flex;
  font-size: 2.2rem;
  justify-content: space-between;
  margin: 1.2em 0;

  svg {
    color: ${(props) => (props.checked ? '#76DF93' : '#CFCFCF')};
    font-size: 3rem;
    margin: 0 1em -5px 5px;
  }
`;
