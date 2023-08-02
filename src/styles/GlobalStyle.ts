import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html,
    body {
        font-size: 16px;
        max-width: 100vw;
        overflow-x: hidden;
    }
`;

export default GlobalStyle;
