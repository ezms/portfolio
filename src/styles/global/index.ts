import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
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
