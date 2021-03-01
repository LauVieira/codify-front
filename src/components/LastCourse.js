import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Button from './Button';

export default function LastCourse({ courseData, firstEntry }) {
  const { photo, alt, title, description, id } = courseData;
  return (
    <Section firstEntry={firstEntry}>
      <Title> Continue seu curso atual </Title>
      <Card>
        <Figure>
          <Image src={photo} alt={alt} />
        </Figure>
        <Container>
          <CourseInformation>
            <h1> {title} </h1>
            <p> {description} </p>
            <LinkMoreInfo to={`/curso/${id}`}> Ver mais </LinkMoreInfo>
          </CourseInformation>
          <Button
            className="btn" 
            type="button" 
            isLoading={false}
            width="220px"
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

  h1 {
    font-size: 2.25rem;
    color: black;
    font-weight: bold;
  }

  p {
    font-size: 2rem;
    color: var(--color-default);
    margin-top: 12px;
  }
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
