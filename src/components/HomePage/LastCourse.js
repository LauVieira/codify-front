import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from '../Button';

import axios from '../../services/api';
import { error } from '../../lib/notify';

export default function LastCourse({ courseData, firstEntry }) {
  const [disabled, setDisabled] = useState();

  const {
    photo, alt, title, description, id, 
  } = courseData;

  async function redirect() {
    try {
      if (disabled) return;
      setDisabled(true);

      const { data } = await axios.post(`/users/return-course/${id}`);
      if (data.firstActivity) {
        const res = await axios.get(`/courses/${id}`);
        const { program } = res.data;
        history.push(`/curso/${id}/capitulo/${program[0].id}/topico/${program[0].topics[0].id}/atividade/${program[0].topics[0].activities[0].id}`);
        return;
      }
      
      history.push(`/curso/${id}/capitulo/${data.chapterId}/topico/${data.topicId}/atividade/${data.activityId}`);
    } catch (err) {
      setDisabled(false);
      error(err.response.data.message);
      console.error(err);
    }
  }
  return (
    <Section firstEntry={firstEntry}>
      <Title> Continue seu curso atual </Title>
      <Card>
        <Figure>
          <Image src={photo} alt={alt} />
        </Figure>
        <Container>
          <CourseInformation>
            <SubTitle> 
              {title} 
            </SubTitle>
            <Description> 
              {description} 
            </Description>
            <LinkMoreInfo to={`/curso/${id}`}> Ver mais </LinkMoreInfo>
          </CourseInformation>
          <Button
            className="btn" 
            type="button"
            disabled={disabled}
            isLoading={disabled}
            width="220px"
            onClick={redirect}
          >
            Continuar curso
          </Button>
        </Container>
      </Card>
    </Section>
  );
}

const Title = styled.h1`
  margin-bottom: 20px;

  font-size: 3rem;
  color: var(--color-subtitle);
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-left: 30px;
  padding-right: 60px;

  .btn {
    font-size: 2rem;

    span::after {
      font-size: 3rem;
      top: -3px;
    }
  }
`;

const Card = styled.article`
  width: 100%;
  height: 190px;

  border-radius: var(--radius-strong);
  box-shadow: var(--shadow-strong);
  background: var(--color-white);
  
  display: flex;
  flex-shrink: 0;
`;

const Section = styled.section`
  padding-top: ${(props) => props.firstEntry ? '150px' : '50px'};
  margin-bottom: 50px;
  width: 100%;
`;

const Figure = styled.figure`
  width: 30%;
  height: 100%;
  vertical-align: top;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;

  border-top-left-radius: var(--radius-strong);
  border-bottom-left-radius: var(--radius-strong);
  object-fit: cover;
`;

const CourseInformation = styled.div`
  width: 50%;

  font-size: 2rem;
`;

const SubTitle = styled.h1`
  font-size: 2.25rem;
  color: black;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 2rem;
  color: var(--color-default);
  margin-top: 12px;
`;

const LinkMoreInfo = styled(Link)`
  display: inline-block;
  margin-top: 15px;

  font-size: 1.6rem;
  font-weight: bold;
  color: var(--color-grey-thin);
  

  transition: 0.1s;

  &:hover, &:focus {
    color: var(--color-blue);
  }
`;
