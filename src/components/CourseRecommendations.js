/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Course from './Course';

export default function UserCourses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.API_BASE_URL}/courses/suggestions`, { withCredentials: true })
      .then((response) => {
        setCourses(response.data);
      })
      .catch(({ response }) => {
        console.error(response);

        alert(response.data);
      });
  }, []);

  return (
    <Container>
      {(courses.length)
        ? (
          <CourseContainer>
            {courses.map((c) => (
              <Course
                title={c.title}
                subtitle={c.description}
                image={c.background}
                imageDescription={c.imageDescription}
                id={c.id}
                key={c.id}
              />
            ))}
          </CourseContainer>
        )
        : (
          <CourseContainer>
            <Title>Nao tem curso</Title>
          </CourseContainer>
        )}
    </Container>
  );
}

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
    min-height: 100vh;
`;
const Title = styled.div`
    width: 80%;
    margin: 50px;
    font-size: 3rem;
    color: var(--color-black);
    font-weight: normal;
`;
