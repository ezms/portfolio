import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --white-color: #F2F2F2;
        --white-color-2: #E1E1E1; 
        --light-gray-color: #8C8C8C;
        --gray-color: #595959;
        --dark-gray-color: #404040;
        --black-color: #1B1B1B;

        --roboto-mono-font: 'Roboto Mono', monospace;
        --inter-font: 'Inter', sans-serif;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }
    
    body {
        scroll-behavior: smooth;
        overflow-x: hidden;
    }
    
    img {
        object-fit: cover;
    }

    li {
        list-style: none;
    }

    button, a {
        :hover {
            cursor: pointer;
        }
    }
`;

export const Root = styled.div``;
