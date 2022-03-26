import styled from 'styled-components';

export const PresentationSectionContainer = styled.section`
    display: grid;
    place-items: center;

    height: 100vh;
    width: 100vw;
`;

export const BackgroundSlideShow = styled.video`
    filter: brightness(0.75);
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;

    @media (min-aspect-ratio: 16/9) {
        width: 100%;
        height: auto;
    }

    @media (max-aspect-ratio: 16/9) {
        width: auto;
        height: 100vh;
    }
`;

export const PresentationTitleContainer = styled.div`
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 10px;

    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 2;

    color: var(--white-color);
    font-weight: bold;
    font-family: 'Inter';
    text-align: center;

    width: 80%;
    padding: 20px;
    transform: translate(-50%, -50%);
`;

export const PresentationTitle = styled.h1`
    color: var(--white-color);
    font-family: var(--roboto-mono-font);
    font-weight: 700;
    font-size: 40px;
    line-height: 40px;
    margin-bottom: 2em;
`;

export const PresentationText = styled.p`
    color: var(--white-color);
    font-family: var(--roboto-mono-font);
    font-weight: 700;
    font-size: 24px;
    max-width: 575px;
    margin-inline: auto;
`;
