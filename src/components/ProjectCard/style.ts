import styled from 'styled-components';

export const ProjectCardContainer = styled.div`
    display: grid;
    place-items: center;

    width: 300px;
    min-height: 380px;
    padding-bottom: 1em;
    background-color: var(--dark-gray-color);

    font-family: 'Inter', serif;
    text-align: center;
    color: var(--white-color);

    @media (min-width: 400px) {
        width: 330px;
    }
`;

export const ProjectThumbnail = styled.img`
    max-width: 100%;
    max-height: 100%;

    width: 250px;
    height: 190px;

    padding: 10px;
`;

export const ProjectTitle = styled.h3`
    text-transform: capitalize;
`;

export const ProjectTagsContainer = styled.div`
    text-align: center;
    align-self: flex-start;
`;

export const ProjectTags = styled.span`
    color: var(--light-gray-color);
    font-size: 0.87rem;
    font-weight: 400;

    ::after {
        content: ', ';
    }

    :last-child::after {
        content: '';
    }
`;

export const ProjectAnchorContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 1em;

    @media (min-width: 400px) {
        flex-direction: row;
    }
`;

export const ProjectAnchorButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 157px;
    height: 42px;

    text-align: center;
    font-size: 0.87rem;
    font-weight: 500;
    color: var(--white-color);

    border: 1px solid #333;
    border-radius: 5px;

    :hover {
        border: 1px solid var(--black-color);
        text-shadow: 0 0 1.5px var(--white-color-2);
    }
`;

export const ProjectRepoAnchor = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 157px;
    height: 42px;

    text-align: center;
    font-size: 0.87rem;
    font-weight: lighter;
    color: var(--black-color);

    background-color: var(--gray-color);
    border-radius: 5px;

    ion-icon {
        font-size: 24px;
    }

    :hover {
        border: 1px solid var(--light-gray-color);
        font-weight: normal;
    }
`;
