import styled from 'styled-components';

export const ProjectsSectionContainer = styled.section`
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
    justify-content: center;
`;

export const Project = styled.li`
    margin-top: 2.5em;
`;

export const ProjectTitle = styled.h3`
    color: var(--dark-gray-color);
    text-transform: capitalize;
    line-height: 100px;
    font-family: 'Inter', serif;
    padding-left: 10px;
`;

export const ProjectCard = styled.div`
    display: grid;
    place-items: center;

    img {
        width: 80%;
        height: 300px;
    }
`;
