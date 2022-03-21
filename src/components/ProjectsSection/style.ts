import styled from 'styled-components';

export const ProjectsSectionContainer = styled.section`
    display: flex;
    flex-direction: column;

    background-color: var(--white-color-2);
    min-height: 100vh;
    padding-bottom: 3em;
`;

export const ProjectsTitle = styled.h2`
    font-family: var(--roboto-mono-font);
    font-size: 30px;
    font-weight: 500;
    line-height: 80px;
    text-align: center;
    border-bottom: 2px solid var(--gray-color);
    margin-inline: auto;
    max-width: 365px;

    @media (min-width: 768px) {
        padding-top: 2em;
    }
`;

export const ProjectList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;

    margin-top: 2em;

    @media (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        flex-direction: row;
    }

    @media (min-width: 1134px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        max-width: 1200px;
        margin-inline: auto;
    }
`;

export const Project = styled.li`
    margin-top: 2.5em;
`;

export const ToPortfolioPage = styled.button`
    background-color: transparent;
    border: 2px solid transparent;
    align-self: center;

    color: var(--gray-color);
    font-size: 24px;

    max-width: 150px;
    min-width: 100px;
    width: 80%;
    height: 50px;

    margin-inline: auto;
    margin-top: 3rem;

    :hover {
        color: var(--black-color);
        border-bottom: 2px solid var(--dark-gray-color);
    }

    :focus {
        outline: none;
    }
`;
