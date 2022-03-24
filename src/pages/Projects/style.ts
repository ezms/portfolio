import styled from 'styled-components';

export const PortfolioSection = styled.section`
    width: 100%;
`;

export const PortfolioList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    margin: 3em;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        place-items: center;

        max-width: 1200px;
    }

    @media (min-width: 1170px) {
        grid-template-columns: repeat(3, 1fr);
        margin-inline: auto;
    }
`;

export const BackHomeButton = styled.button`
    position: sticky;
    bottom: 30px;
    left: 90%;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 60px;
    height: 60px;

    background-color: var(--black-color);
    border-radius: 100%;
    transition: all 0.3s;

    color: var(--white-color);

    ion-icon {
        font-size: 40px;
    }
`;
