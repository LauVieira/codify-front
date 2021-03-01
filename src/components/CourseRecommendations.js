import React from 'react';
import styled from 'styled-components';
import CardCourse from './CardCourse';

export default function UserCourses({ coursesData, firstTime }) {
  return (
    <Section>
      {!firstTime && <Title> Experimente nossos outros cursos </Title>}
      <Container>
        {coursesData.map((course) => (
          <CardCourse
            course={course}
            withButton={false}
            key={course.id}
          />
        ))}
      </Container>
    </Section>
  );
}

const Section = styled.section`
  margin-bottom: 50px;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Title = styled.h1`
  margin-bottom: 20px;

  font-size: 3rem;
  color: var(--color-subtitle);
`;
