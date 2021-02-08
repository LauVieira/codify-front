import React, { useContext } from 'react';
import styled from 'styled-components';

import UserContext from '../contexts/UserContext';

export default function ProfilePicture({ existPhoto, ...props }) {
  const { user } = useContext(UserContext);
  const words = user.name.split(' ');

  const initialLetters = words.length === 1
    ? `${words[0].charAt()}.`
    : `${words[0].charAt()}. ${words[1].charAt()}.`;

  return (
    <Photo existPhoto={existPhoto} {...props}>
      {(existPhoto)
        ? <img alt="" />
        : initialLetters}
    </Photo>
  );
}

const Photo = styled.figure`
  width: 70px;
  height: 70px;

  border-radius: 50%;
  border: ${({ existPhoto }) => (existPhoto ? 'none' : '3px solid #46A7D4')};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  text-transform: uppercase;
  color: var(--color-blue);
  font-size: 2.5rem;
  letter-spacing: -1.5px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
`;
