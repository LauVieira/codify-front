import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../services/api';

import {
  Header, Summary, StudyProgram, ArrowBackButton, 
} from '../components';
import CourseContext from '../contexts/CourseContext';
import UserContext from '../contexts/UserContext';

export default function Course() {
  const { setFirstEntry } = useContext(UserContext);
  const [background, setBackground] = useState('');
  const {
    courseData,
    setCourseData,
    setProgram,
    program,
  } = useContext(CourseContext);
  const { id } = useParams();

  useEffect(() => {
    setFirstEntry(false);
    axios.get(`/courses/${id}`)
      .then((response) => {
        setCourseData(response.data);
        setBackground(response.data.course.background);
        setProgram(response.data.program);
      })
      .catch((error) => {
        alert('Erro ao buscar o curso selecionado');
        console.log(error);
      });
  }, []);

  return (
    <>
      <Header />
      <Container>
        {courseData.length !== 0
            && (
              <>
                <Details>
                  <ArrowBackButton
                    to="/"
                    width="50px"
                    height="50px"
                    left="15px"
                    top="20px"
                    fontSize="40px"
                  />
                  <h1>{courseData.course.title}</h1>
                  <p>{courseData.course.description}</p>
                  <Summary courseData={courseData} />
                </Details>
                <StudyProgram program={courseData.program} />
              </>
            )}
      </Container>
    </>
  );
}

const Container = styled.div`
  min-height: 100vh;
  height: auto;
  background-color: #F9F9F9;
  margin-top: 100px;
  padding-bottom: 80px;
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
