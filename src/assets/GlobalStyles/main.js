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
        line-height: 1.5;
        color: var(--color-default);
        text-rendering: optimizeLegibility;
        min-height: 100vh;
        overflow-y: scroll;
        background: var(--gradient-blue);
    }

    a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
    }

    button, input {
        background: none;
        color: inherit;
        border: 0;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
        text-align: inherit;
        font-size: 100%;
        margin: 0;
    }

    strong, h1, h2, h3, h4, h5, h6 { 
        font-weight: bold;
    }
`;