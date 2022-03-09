import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
    
    :root {
        --white-color: #F2F2F2;
        --light-gray-color: #8C8C8C;
        --gray-color: #595959;
        --dark-gray-color: #404040;
        --black-color: #1B1B1B;

        --roboto-mono-font: 'Roboto Mono', monospace;;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
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
