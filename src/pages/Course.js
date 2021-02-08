import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../services/api';
import Summary from '../components/Summary';
import CourseContext from '../contexts/CourseContext';

export default function Course() {
  const { courseData, setCourseData } = useContext(CourseContext);
  const { id } = useParams();
  useEffect(() => {
    axios.get(`/courses/${id}`)
      .then((response) => {
        console.log(response.data);
        setCourseData(response.data);
      })
      .catch((error) => {
        alert('Erro ao buscar o curso selecionado');
        console.log(error);
      });
  }, []);
  console.log(courseData.course);
  return (
    <Container>
      <HeaderTemporario>Temporário</HeaderTemporario>
      {courseData.length !== 0
            && (
            <Details>
              <h1>{courseData.course.title}</h1>
              <p>{courseData.course.description}</p>
              <Summary />
            </Details>
            )}
    </Container>
  );
}

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #E5E5E5;
`;

const HeaderTemporario = styled.header`
    height: 90px;
    background-color: #FFFFFF;
`;
const Details = styled.div`
    height: 180px;
    background: linear-gradient(180deg, #EFDA4F 0%, rgba(239, 218, 79, 0.56) 100%);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
    position: relative;
    h1{
        color: #000;
        font-size: 35px;
    }
    p{
        color: #000;
        font-size: 20px;
    }
`;
