/* eslint-disable no-param-reassign */
import React, { useContext } from 'react';
import styled from 'styled-components';
import CardCourse from './CardCourse';

import UserContext from '../contexts/UserContext';

export default function UserCourses({ coursesData }) {
  if (coursesData.length === 1) return;
  const { user } = useContext(UserContext);

  coursesData = coursesData.filter((course) => course.id !== user.lastCourse);
  
  return (
    <Section>
      <Title> Meus cursos em andamento </Title>
      <Container>
        {coursesData.map((course) => (
          <CardCourse
            course={course}
            withButton
            key={course.id}
          />
        ))}
      </Container>
    </Section>
  );
}

const Title = styled.h1`
  margin-bottom: 20px;

  font-size: 3rem;
  color: var(--color-subtitle);
`;

const Section = styled.section`
  margin-bottom: 50px;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
