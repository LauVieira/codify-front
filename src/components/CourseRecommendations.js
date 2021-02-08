import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from '../services/api';
import CardCourse from './CardCourse';

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

        alert(response.data.message);
      });
  }, []);

  return (
    <RecommendationsContainer>
      {(courses.length)
        ? (
          <CourseContainer>
            {courses.map((c) => (
              <CardCourse
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
    </RecommendationsContainer>
  );
}

const RecommendationsContainer = styled.main`
    background-color: var(--color-white);
    border-radius: 5px;
    width: 100%;
    margin: 0 auto;
`;

const CourseContainer = styled.article`
    width: 75%;
    height: 100%;
    display: flex;
    margin: 0 auto;
    flex-wrap: wrap;
    justify-content: space-between;
    min-height: 100vh;
`;
const Title = styled.article`
    width: 80%;
    margin: 50px;
    font-size: 3rem;
    color: var(--color-black);
    font-weight: normal;
`;
