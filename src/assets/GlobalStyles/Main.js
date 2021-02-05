import { css } from 'styled-components';

export default css`
    *, *::before, *::after {
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }

    body {
        font-family: var(--font-roboto);
        font-style: normal;
        font-weight: 400;
        line-height: 1.2;
        color: var(--color-default);
        text-rendering: optimizeLegibility;
        background: var(--gradient-blue);
        overflow-y: scroll;
    }

    a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }

    button, input {
        background: transparent;
        color: inherit;
        border: 0;
        padding: 0;
        font: inherit;
        outline: inherit;
        text-align: inherit;
        font-size: 100%;
        margin: 0;
    }

    strong { 
        font-weight: bold;
    }
`;
