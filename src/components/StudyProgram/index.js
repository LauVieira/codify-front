import React from 'react';
import styled from 'styled-components';
import Chapter from './Chapter';

export default function StudyProgram(props) {
  const { program } = props;

  return (
    <ProgramBox>

      <H1>Ementa</H1>

      <Ul>
        {program.map((chapter, index) => (
          <React.Fragment key={chapter.id}>
            <Chapter chapter={chapter} />
            {index !== program.length - 1 && <Line />}
          </React.Fragment>
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
