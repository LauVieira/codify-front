import React, { useState } from 'react';
import styled from 'styled-components';
import Topic from './Topic';

export default function StudyProgram () {
  const temporaryList = [
    { id: 1, title: 'Apresentação', classes: '2 aulas', exercises: '5 exercícios' },
    { id: 2, title: 'Preparando o ambiente', classes: '2 aulas', exercises: '5 exercícios' },
    { id: 3, title: 'Introdução à linguagem JS', classes: '2 aulas', exercises: '5 exercícios' },
    { id: 4, title: 'Variáveis e Tipos de Dados', classes: '2 aulas', exercises: '5 exercícios' },
    { id: 5, title: 'Estruturas lógicas e condicionais', classes: '2 aulas', exercises: '5 exercícios' },
  ];

  return (
    <ProgramBox>
      <H1>Ementa</H1>
      <Ul>
        {temporaryList.map((topic, index) => (
          <>
            <Topic key={topic.id} topic={topic} />
            {index !== temporaryList.length - 1 && <Line />}
          </>
        ))}
      </Ul>
    </ProgramBox>
  );
}

const ProgramBox = styled.div`
  margin: 180px auto 0 auto;
  width: 80%;
`;

const H1 = styled.h1`
  color: #000;
  font-size: 3rem;
  margin: 0 0 2rem 0.2rem;
`;

const Ul = styled.ul`
  background-color: #FFF;
  border-radius: 15px;
  box-shadow: 1px 1px 10px 2px rgba(0,0,0,0.1);
  width: 100%;
`;

const Line = styled.div`
  background: rgba(220,220,220,0.5);
  height: 1px;
  width: 100%;
`;
