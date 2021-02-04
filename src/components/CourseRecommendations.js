/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Course from './Course';

export default function Header() {
  const courses = [{
    title: 'Javascript do zero!',
    subtitle: 'Aprenda Javascript do zero ao avançado, com muita prática!',
    image: 'https://sep.yimg.com/ty/cdn/madisonartshop/most-famous-paintings-2.jpg',
    imageDescription: 'Picasso',
  },
  {
    title: 'Javascript do zero!',
    subtitle: 'Aprenda Javascript do zero ao avançado, com muita prática!',
    image: 'https://sep.yimg.com/ty/cdn/madisonartshop/most-famous-paintings-2.jpg',
    imageDescription: 'Picasso',
  },
  {
    title: 'Javascript do zero!',
    subtitle: 'Aprenda Javascript do zero ao avançado, com muita prática!',
    image: 'https://sep.yimg.com/ty/cdn/madisonartshop/most-famous-paintings-2.jpg',
    imageDescription: 'Picasso',
  },
  {
    title: 'Javascript do zero!',
    subtitle: 'Aprenda Javascript do zero ao avançado, com muita prática!',
    image: 'https://sep.yimg.com/ty/cdn/madisonartshop/most-famous-paintings-2.jpg',
    imageDescription: 'Picasso',
  }];
  console.log(courses);
  return (
    <Container>
      <CourseContainer>
        {courses.map((c) => (
          <Course
            title={c.title}
            subtitle={c.subtitle}
            image={c.image}
            imageDescription={c.imageDescription}
          />
        ))}
      </CourseContainer>
    </Container>
  );
}

const Container = styled.div`
    background-color: white;
    border-radius: 5px;
    height: 100vh;
    width: 100%;
    margin: 0 auto;
`;

const CourseContainer = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
`;