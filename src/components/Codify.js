import React from 'react';
import styled from 'styled-components';

export default function Codify({children, ...props}) {
    return (
        <Title {...props}>
            {children}
        </Title>
    );
}

const Title = styled.h1`
    font-family: var(--font-zilla);
    font-size: ${props => props.fontSize};
    line-height: ${props => props.lineHeight};
    letter-spacing: 0.6rem;

    color: ${props => props.color};
`;