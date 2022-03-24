import styled from 'styled-components';

export const ContactMessageDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;

    height: 13.7em;
    width: 95%;
    margin-inline: auto;
    padding: 10px;

    font-family: 'Inter', serif;

    @media (min-width: 1024px) {
        align-items: center;
    }
`;

export const PrimaryTitle = styled.h1`
    ::after {
        content: '!';
        font-variant: small-caps;
        font-style: italic;
    }
`;

export const Description = styled.p`
    font-size: 18px;
    font-weight: lighter;
`;
