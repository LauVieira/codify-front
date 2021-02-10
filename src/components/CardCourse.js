import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export default function CardCourse(props) {
  const {
    title, subtitle, image, imageDescription, id,
  } = props;
  const history = useHistory();

  function handleClick() {
    history.push(`/curso/${id}`);
  }
  return (
    <StyledCourse onClick={handleClick}>
      <Figure>
        <Image src={image} alt={imageDescription} />
      </Figure>
      <CourseInformation>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </CourseInformation>
    </StyledCourse>
  );
}

const StyledCourse = styled.button`
    margin: 50px 0 0 0;
    width: 384px;
    height: 515px;
    border-radius: 20px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
    flex-shrink:0;
    background-color: var(--color-white);
    cursor: pointer;
`;

const Figure = styled.figure`
    width: 100%;
    height: 50%;
    vertical-align:top;
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    
`;
const CourseInformation = styled.article`
    width: 100%;
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
