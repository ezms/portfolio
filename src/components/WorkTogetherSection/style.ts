import styled from 'styled-components';

export const WorkTogetherSectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    background-color: var(--white-color-2);

    max-width: 100%;
    margin-inline: auto;
    height: 50vh;
`;

export const WorkTogetherText = styled.button`
    display: inline-flex;
    align-items: center;
    justify-content: center;

    border: none;
    background-color: transparent;

    font-size: 1.5rem;
    line-height: 2.5rem;
    font-weight: 700;
    font-size: 18px;
    text-align: center;

    padding-top: 2px;
    padding-bottom: 3px;

    :hover {
        text-decoration: underline;
    }

    ion-icon {
        text-decoration: none;
    }

    @media (min-width: 620px) {
        font-size: 24px;
    }

    @media (min-width: 1024px) {
        font-size: 32px;
    }
`;
