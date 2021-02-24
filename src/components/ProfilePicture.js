import React, { useContext } from 'react';
import styled from 'styled-components';

import UserContext from '../contexts/UserContext';

export default function ProfilePicture({ children, existPhoto, width, height, ...props }) {
  const { user } = useContext(UserContext);
  const words = user.name.split(' ');

  const initialLetters = `${words[0].charAt()}. ${words[1].charAt()}.`;

  return (
    <Photo width={width} height={height} existPhoto={existPhoto} {...props}>
      { 
        (existPhoto)
          ? <img alt="" />
          : initialLetters
      }
      {children}
    </Photo>
  );
}

const Photo = styled.figure`
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  border-radius: 50%;
  border: ${({ existPhoto }) => (existPhoto ? '2px solid #fff' : '2px solid #46A7D4')};

  display: flex;
  align-items: center;
  justify-content: center;

  text-transform: uppercase;
  color: var(--color-blue);
  font-size: 2.5rem;
  letter-spacing: -1.5px;

  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  &:hover {
    filter: brightness(110%);
  }
`;
