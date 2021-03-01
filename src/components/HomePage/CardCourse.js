import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../Button';

export default function CardCourse({ course, withButton }) {
  const {
    title, description, photo, alt, id,
  } = course;
  const history = useHistory();

  function handleClick() {
    history.push(`/curso/${id}`);
  }

  return (
    <StyledCourse onClick={handleClick}>
      <Figure>
        <Image src={photo} alt={alt} />
      </Figure>
      <CourseInformation>
        <h1> 
          {' '}
          {title}
          {' '}
        </h1>
        <p> 
          {' '}
          {description}
          {' '}
        </p>
      
        {withButton && (
          <Button
            className="btn" 
            type="button" 
            isLoading={false}
          >
            Continuar curso
          </Button>
        )}
      </CourseInformation>
    </StyledCourse>
  );
}

const StyledCourse = styled.article`
  width: 315px;

  border-radius: var(--radius-strong);;
  box-shadow: var(--shadow-strong);
  background-color: var(--color-white);

  margin-right: 45px;

  flex-shrink: 0;
  cursor: pointer;
`;

const Figure = styled.figure`
  width: 100%;
  height: 200px;

  vertical-align: top;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;

  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  object-fit: cover;
`;

const CourseInformation = styled.section`
  width: 100%;
  padding: 15px 25px;

  h1 {
    margin-bottom: 15px;
    font-weight: bold;
    color: black;
    font-size: 2.4rem;
  }

  p {
    font-size: 2.2rem;
    margin-bottom: 15px;
    color: var(--color-grey-regular);
  }

  .btn {
    height: 40px;
    font-size: 2rem;

    span::after {
      font-size: 3rem;
      top: -4px;
    }
  }
`;
