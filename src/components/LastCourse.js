/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

export default function LastCourse(props) {
  const {
    title, subtitle, image, imageDescription,
  } = props;
  return (
    <PageContainer>
      <Title><h1>Continue seu curso atual</h1></Title>
      <Container>
        <Figure>
          <Image src={image} alt={imageDescription} />
        </Figure>
        <CourseInformation>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <MoreInfoButton>Ver mais</MoreInfoButton>
        </CourseInformation>
        <Button>
          Continuar curso
          {'>>'}
        </Button>
      </Container>
    </PageContainer>
  );
}
const Title = styled.article`
    width: 80%;
    margin: 10px auto;
    h1{
      font-size: 3rem;
      color: var(--color-black);
      font-weight: normal;
    }
`;

const Container = styled.section`
    width: 80%;
    height: 250px;
    border-radius: 20px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
    flex-shrink:0;
    display: flex;
    margin: 0 auto;
`;

const PageContainer = styled.section`
    padding: 50px;
    background-color: var(--color-white);
    border-radius: 5px;
    width: 100%;
    margin: 0 auto;
`;

const Figure = styled.button`
    width: 30%;
    height: 100%;
    vertical-align:top;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    
`;
const CourseInformation = styled.article`
    width: 40%;
    height: 50%;
    color: black;
    font-size: 2rem;
    h1{
      margin: 20px 0 0 20px;
      font-weight: bold;
    }
    p{
      margin: 20px 0 0 20px;
      color: var(--color-grey-regular);
    }
`;
const MoreInfoButton = styled.button`
    margin: 20px 0 0 20px;
    color: var(--color-grey-regular);
    font-weight: bold;
`;
const Button = styled.button`
    margin: auto auto;
    height: 35px;
    font-family: Roboto;
    background-color: var(--color-blue);
    width: 170px;
    text-align: center;
    color: var(--color-white);
    border-radius: 5px;
    font-size: 1.5rem;
    font-weight: bold;
`;
