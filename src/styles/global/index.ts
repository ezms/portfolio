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
    
    html {
        scroll-behavior: smooth;
    }
    
    body {
        overflow-x: hidden;
        scrollbar-width: thin;
	    scrollbar-color: var(--gray-color) transparent;
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

    ::-webkit-scrollbar {
        width: 12px;
        height: 12px;
    }

    ::-webkit-scrollbar-button {
        width: 0px;
        height: 0px;
    }

    ::-webkit-scrollbar-thumb {
        background: var(--dark-gray-color);
        border: 0px none transparent;
        border-radius: 50px;
    }

    ::-webkit-scrollbar-track {
        background: var(--white-color-2);
        border: 0px none transparent;
        border-radius: 50px;
    }

    ::-webkit-scrollbar-corner {
        background: transparent;
    }
`;

export const Root = styled.div``;
