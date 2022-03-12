import styled from 'styled-components';
import BackGroundGif from './../../assets/gifs/monophy.gif';

export const PresentationSectionContainer = styled.section`
    display: grid;
    place-items: center;

    height: 100vh;
    width: 100vw;
`;

export const PresentationBackground = styled.div`
    background-image: url(${BackGroundGif});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: brightness(0.35);

    height: 100%;
    width: 100%;
`;

export const PresentationTitleContainer = styled.div`
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
    overflow: hidden;
`;

export const PresentationText = styled.p`
    color: var(--white-color);
    font-family: var(--roboto-mono-font);
    font-weight: 700;
    font-size: 25px;
    max-width: 575px;
    margin-inline: auto;
`;
