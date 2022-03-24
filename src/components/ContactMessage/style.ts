import styled from 'styled-components';

export const ContactMessageDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 10px;

    padding: 10px;
    height: 13.7em;

    font-family: 'Inter', serif;
`;

export const PrimaryTitle = styled.h1`
    ::after {
        content: '!';
        font-variant: small-caps;
        font-style: italic;
    }
`;

export const Description = styled.p`
    font-size: 14px;
    font-weight: lighter;
`;
