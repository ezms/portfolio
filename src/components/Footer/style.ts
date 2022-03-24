import styled from 'styled-components';

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    color: var(--white-color);
    font-family: 'Inter', sans-serif;

    background-color: var(--black-color);
    min-height: 40vh;
    padding-bottom: 1em;

    @media (min-width: 768px) {
        justify-content: center;
    }
`;

export const FooterSection = styled.section`
    margin: 2rem;
`;

export const FooterTitle = styled.h2`
    font-size: 36px;
`;

export const FooterEmail = styled.span`
    color: var(--light-gray-color);
`;

export const FooterMessage = styled.p`
    font-size: 1.5rem;
    line-height: 2rem;
    padding-top: 2px;
    padding-bottom: 3px;
    margin: 1em 0;
`;

export const SocialMediaBox = styled.div`
    display: inline-flex;
    gap: 15px;
`;

export const FooterInfos = styled.span`
    font-size: 14px;
    margin-left: 3em;
    margin-bottom: 0.5em;
`;

export const FooterScrollTopButton = styled.button`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 60px;
    height: 60px;
    border: none;

    background-color: transparent;
    border-radius: 100%;

    color: var(--white-color);
    transition: all 0.3s;

    position: relative;
    bottom: -290px;
    left: 60%;

    :hover {
        box-shadow: var(--gray-color) 0px 2px 8px;
    }

    ion-icon {
        font-size: 40px;
    }

    @media (min-width: 410px) {
        bottom: -260px;
    }

    @media (min-width: 502px) {
        bottom: -230px;
    }

    @media (min-width: 768px) {
        position: static;
        float: right;
    }
`;
