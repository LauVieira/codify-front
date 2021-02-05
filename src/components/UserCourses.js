/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Course from './Course';

export default function UserCourses() {
  const courses = [{
    title: 'Javascript do zero!',
    subtitle: 'Aprenda Javascript do zero ao avançado, com muita prática!',
    image: 'https://sep.yimg.com/ty/cdn/madisonartshop/most-famous-paintings-2.jpg',
    imageDescription: 'Picasso',
    id: 1,
  },
  {
    title: 'Javascript do zero!',
    subtitle: 'Aprenda Javascript do zero ao avançado, com muita prática!',
    image: 'https://sep.yimg.com/ty/cdn/madisonartshop/most-famous-paintings-2.jpg',
    imageDescription: 'Picasso',
    id: 2,
  },
  {
    title: 'Javascript do zero!',
    subtitle: 'Aprenda Javascript do zero ao avançado, com muita prática!',
    image: 'https://sep.yimg.com/ty/cdn/madisonartshop/most-famous-paintings-2.jpg',
    imageDescription: 'Picasso',
    id: 3,
  },
  {
    title: 'Javascript do zero!',
    subtitle: 'Aprenda Javascript do zero ao avançado, com muita prática!',
    image: 'https://sep.yimg.com/ty/cdn/madisonartshop/most-famous-paintings-2.jpg',
    imageDescription: 'Picasso',
    id: 4,
  }];
  return (
    <Container>
      <Title><h1>Meus cursos em andamento</h1></Title>
      <CourseContainer>
        {courses.map((c) => (
          <Course
            title={c.title}
            subtitle={c.subtitle}
            image={c.image}
            imageDescription={c.imageDescription}
            key={c.id}
          />
        ))}
      </CourseContainer>
    </Container>
  );
}

const Title = styled.div`
    width: 75%;
    margin: 0 auto;
    h1{
      font-size: 3rem;
      color: var(--color-black);
      font-weight: normal;
    }
`;

const Container = styled.div`
    background-color: var(--color-white);
    border-radius: 5px;
    width: 100%;
    margin: 0 auto;
`;

const CourseContainer = styled.div`
    width: 75%;
    height: 100%;
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: space-between;
`;