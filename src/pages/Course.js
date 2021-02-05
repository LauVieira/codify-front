import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { courses } from '../utils/mockedCourses';
import Summary from '../components/Summary';

export default function Course() {
  const [course, setCourse] = useState([]);
  const { id } = useParams();
  useEffect(()=>{
    axios.get(`http://localhost:3000/courses/${id}`)
    .then(response=>{
        console.log(response.data);
    })
    .catch(error=>{

    })
    setCourse(courses.filter(course => course.id === parseInt(id)));
  }, []);
  
  console.log(course);
  return (
    <Container>
        <HeaderTemporario>Temporário</HeaderTemporario>
        {course.length !== 0 && 
            <Details>
                <h1>{course[0].title}</h1>
                <p>{course[0].description}</p>
                <Summary course={course} /> { /* tem que receber o contexto por props e o curso */}
            </Details>
        }
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

