import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle `
    body { 
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
        font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
        transition: all 0.50s linear;
    }
    .inc-exp-container {
        background: ${({ theme }) => theme.body};
        transition: all 0.40s linear;
    }
`