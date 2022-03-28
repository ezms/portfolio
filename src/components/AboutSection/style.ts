import styled from 'styled-components';

export const AboutSectionContainer = styled.section`
    min-height: 100%;
    padding: 3em 0;
    background-color: var(--white-color-2);

    @media (min-width: 1024px) {
        min-height: 100vh;
    }
`;

export const AboutSectionTitle = styled.h2`
    font-family: var(--roboto-mono-font);
    font-size: 40px;
    font-weight: 500;
    line-height: 80px;
    text-align: center;
    border-bottom: 2px solid var(--gray-color);
    margin-inline: auto;
    width: 160px;
`;

export const AboutText = styled.p`
    color: var(--gray-color);
    font-family: var(--roboto-mono-font);
    font-weight: 700;
    font-size: 25px;
    text-align: center;
    max-width: 75vw;
    margin-inline: auto;
    margin-top: 3em;
`;

export const AboutDownloadCV = styled.a`
    display: block;
    margin-top: 5em;
    margin-inline: auto;
    width: 9rem;

    font-family: var(--roboto-mono-font);
    font-size: 16px;
    font-weight: 500;
    line-height: 30px;
    text-align: center;
    color: var(--gray-color);
    border-bottom: 2px solid var(--gray-color);

    transition: all 0.3s;

    :hover {
        line-height: 45px;
        color: var(--black-color);
        border-bottom: 2px solid var(--black-color);
    }
`;
