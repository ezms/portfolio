import styled from 'styled-components';
import Banner from './../../assets/images/background_45.jpg';

export const PortfolioHeaderContainer = styled.header`
    height: 40vh;
`;

export const PortifolioBanner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40vh;
    background-image: url(${Banner});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: brightness(0.5);
`;

export const PortfolioBannerTitle = styled.div`
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/opacity/see-through */
    border: 2px solid var(--white-color-2);
    transform: translate(-50%, -50%);
    filter: drop-shadow(1px 1px 1px var(--white-color));

    color: var(--white-color);
    font-weight: 700;
    text-align: center;
    font-family: 'Inter', sans-serif;
    letter-spacing: 2px;

    position: absolute;
    top: 20%;
    left: 50%;
    z-index: 2;

    width: 80%;
    padding: 20px;
`;
