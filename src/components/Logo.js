/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';

export default function Header() {
  return (
    <Container>
      <Codify color="#333333" fontSize="5.6rem" lineHeight="6.7rem"> Codify </Codify>
    </Container>
  );
}

const Container = styled.button`
    margin-left: 50px;
`;

const Codify = styled.div`
    margin-left: 50px;
`;
