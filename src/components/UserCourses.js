import React from 'react';
import styled from 'styled-components';
import CardCourse from './CardCourse';

export default function UserCourses({ coursesData }) {
  console.log(coursesData);
  
  return (
    <Section>
      <Title> Meus cursos em andamento </Title>
      <CourseContainer>
        {coursesData.map((course) => (
          <CardCourse
            course={course}
            key={course.id}
          />
        ))}
      </CourseContainer>
    </Section>
  );
}

const Title = styled.h1`
  margin-bottom: 20px;

  font-size: 3rem;
  color: var(--color-subtitle);
`;

const Section = styled.section`
  padding: 50px 0px;
  width: 100%;
`;

const CourseContainer = styled.article`
  width: 75%;
  height: 100%;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  justify-content: space-between;
`;
