import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../services/api';
import { Header, Summary, StudyProgram } from '../components';
import CourseContext from '../contexts/CourseContext';

export default function Course() {
  const { courseData, setCourseData } = useContext(CourseContext);
  const [background, setBackground] = useState('');
  const { id } = useParams();
  useEffect(() => {
    axios.get(`/courses/${id}`)
      .then((response) => {
        setCourseData(response.data);
        setBackground(response.data.course.background);
      })
      .catch((error) => {
        alert('Erro ao buscar o curso selecionado');
        console.log(error);
      });
  }, []);

  console.log(background);

  return (
    <>
      <Header />
      <Container>
        {courseData.length !== 0
            && (
              <>
                <Details background={background}>
                  <h1>{courseData.course.title}</h1>
                  <p>{courseData.course.description}</p>
                  <Summary />
                </Details>
                <StudyProgram program={courseData.program} />
              </>
            )}
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #F9F9F9;
  margin-top: 100px;
`;

const Details = styled.div`
  height: 200px;
  background: ${(props) => props.background ? `url(${props.background}) no-repeat top center` : 'linear-gradient(180deg, #EFDA4F 0%, rgba(239, 218, 79, 0.56) 100%)'};
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 35px;
  position: relative;
  h1 {
    color: #000;
    font-size: 35px;
    font-weight: 700;
  }
  p {
    color: #383838;
    font-size: 20px;
    font-weight: 400;
    margin-top: 10px;
  }
`;
