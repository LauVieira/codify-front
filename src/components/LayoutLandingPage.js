import React from 'react';
import styled from 'styled-components';

export default function LayoutLandingPage({ children }) {
    return(
        <MainWrapper>
            <Column>
                {children}
            </Column>
        </MainWrapper>
    );
}

const MainWrapper = styled.main`
  width: 100%;
  min-height: 100vh;
  padding: 5vh 0;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Column = styled.div`
  width: 90%;
  max-width: 400px;
`;
